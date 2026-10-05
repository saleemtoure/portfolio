import { db } from "./_lib/db.js";
import { passwordOk, issueCookie, clientKey } from "./_lib/auth.js";

const WINDOW = "15 minutes";
const MAX_FAILS = 8;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).end();
  if (!String(req.headers["content-type"] || "").includes("application/json"))
    return res.status(415).end();

  const sql = db();
  const who = clientKey(req);
  // Per-IP limit only. A global cap would let anyone lock the owner out; the
  // password itself is long and random, so guessing is not the real defence.
  const [{ n }] = await sql`
    select count(*)::int as n from login_attempts
    where who = ${who} and ts > now() - ${WINDOW}::interval`;
  if (n >= MAX_FAILS) return res.status(429).json({ error: "too_many" });

  // Vercel parses JSON lazily and throws on a malformed body.
  let password;
  let remember;
  try {
    password = req.body && req.body.password;
    remember = req.body && req.body.remember === true;
  } catch {
    return res.status(400).end();
  }
  if (!passwordOk(password)) {
    await sql`insert into login_attempts (who) values (${who})`;
    await new Promise((r) => setTimeout(r, 400));
    return res.status(401).json({ error: "wrong" });
  }
  await sql`delete from login_attempts where who = ${who}`;
  issueCookie(res, remember);
  res.status(204).end();
}
