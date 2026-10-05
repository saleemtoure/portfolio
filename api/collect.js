import crypto from "node:crypto";
import { db, osloDay } from "./_lib/db.js";
import {
  SITE_HOSTS,
  BOT_UA,
  device,
  browser,
  os,
  normPath,
  refHost,
  clip,
  leaveData,
} from "./_lib/parse.js";

const KINDS = new Set(["view", "click", "leave"]);
const MAX_BODY = 8192;

// Today's salt, cached per function instance. A new day gets a fresh random
// salt and every older one is deleted.
let saltCache = { day: null, salt: null };
async function todaysSalt(sql) {
  const day = osloDay();
  if (saltCache.day === day) return saltCache.salt;
  const fresh = crypto.randomBytes(32).toString("hex");
  const rows = await sql`
    with ins as (
      insert into salts (day, salt) values (${day}, ${fresh})
      on conflict (day) do nothing
      returning salt
    )
    select salt from ins
    union all
    select salt from salts where day = ${day}
    limit 1`;
  await sql`delete from salts where day < ${day}`;
  saltCache = { day, salt: rows[0].salt };
  return saltCache.salt;
}

function sameSite(req) {
  const src = req.headers.origin || req.headers.referer;
  if (!src) return false;
  try {
    return SITE_HOSTS.has(new URL(src).hostname);
  } catch {
    return false;
  }
}

function readBody(req) {
  const b = req.body;
  if (b && typeof b === "object" && !Buffer.isBuffer(b)) return b;
  const text = Buffer.isBuffer(b) ? b.toString("utf8") : String(b || "");
  if (text.length > MAX_BODY) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export default async function handler(req, res) {
  // Always answer 204: the browser has nothing to do with the result, and a
  // uniform response gives nothing away to anyone probing the endpoint.
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.status(204).end();
    return;
  }
  try {
    const ua = String(req.headers["user-agent"] || "");
    if (!ua || BOT_UA.test(ua) || !sameSite(req)) return res.status(204).end();

    const e = readBody(req);
    if (!e || !KINDS.has(e.k)) return res.status(204).end();
    const vid = clip(e.v, 64);
    const path = normPath(e.p);
    if (!vid || !path) return res.status(204).end();

    const sql = db();
    const ip = String(
      req.headers["x-real-ip"] ||
        String(req.headers["x-forwarded-for"] || "").split(",")[0] ||
        "",
    ).trim();
    const salt = await todaysSalt(sql);
    const visitor = crypto
      .createHash("sha256")
      .update(salt + "|" + ip + "|" + ua)
      .digest("hex")
      .slice(0, 32);

    const h = req.headers;
    const city = h["x-vercel-ip-city"];
    const isView = e.k === "view";
    const u = (isView && e.u) || {};
    const width = Number(e.sw);

    await sql`
      insert into events (
        kind, vid, visitor, path, ref_host, utm_source, utm_medium,
        utm_campaign, country, city, device, browser, os, lang, browser_lang,
        theme, mode, screen, target, target_kind, data
      ) values (
        ${e.k}, ${vid}, ${visitor}, ${path},
        ${isView ? refHost(e.r) : null},
        ${clip(u.s, 60)}, ${clip(u.m, 60)}, ${clip(u.c, 80)},
        ${clip(h["x-vercel-ip-country"], 2)},
        ${city ? clip(decodeURIComponent(city), 60) : null},
        ${device(ua)}, ${browser(ua)}, ${os(ua)},
        ${clip(e.l, 8)}, ${isView ? clip(e.bl, 16) : null},
        ${clip(e.t, 20)}, ${clip(e.m, 10)},
        ${isView && Number.isFinite(width) ? String(Math.round(width)).slice(0, 5) : null},
        ${e.k === "click" ? clip(e.tg, 120) : null},
        ${e.k === "click" ? clip(e.tk, 20) : null},
        ${e.k === "leave" ? JSON.stringify(leaveData(e.d)) : null}
      )`;

    // Retention, done in passing instead of a cron job: roughly one request
    // in a hundred clears events older than 13 months and stale login logs.
    if (Math.random() < 0.01) {
      await sql`delete from events where ts < now() - interval '13 months'`;
      await sql`delete from login_attempts where ts < now() - interval '1 day'`;
    }
  } catch (err) {
    console.error("collect failed", err);
  }
  res.status(204).end();
}
