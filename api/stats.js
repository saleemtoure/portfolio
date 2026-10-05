import { db } from "./_lib/db.js";
import { isAdmin } from "./_lib/auth.js";
import { aggregate } from "./_lib/aggregate.js";

// "week" is the current Monday–Sunday week; the rest are rolling day counts
// ending today. Each is compared with the same span immediately before it.
const RANGES = { week: 7, 7: 7, 30: 30, 90: 90 };
const MAX_ROWS = 300000;

function addDays(day, n) {
  const d = new Date(day + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).end();
  if (!isAdmin(req)) return res.status(401).json({ error: "auth" });

  const range = Object.hasOwn(RANGES, req.query.range) ? req.query.range : "7";
  const n = RANGES[range];
  const week = range === "week";
  const sql = db();

  // Window edges are worked out in Postgres so Oslo midnight and DST are
  // handled by the database's time-zone rules, not by hand.
  const [w] = await sql`
    with t as (
      select case when ${week}::boolean
                  then date_trunc('week', now() at time zone 'Europe/Oslo')
                  else date_trunc('day', now() at time zone 'Europe/Oslo')
                       - make_interval(days => ${n - 1}::int)
             end as s,
             now() at time zone 'Europe/Oslo' as local
    )
    select
      extract(epoch from (s at time zone 'Europe/Oslo'))::float8 * 1000 as start,
      extract(epoch from ((s - make_interval(days => ${n}::int)) at time zone 'Europe/Oslo'))::float8 * 1000 as prev_start,
      to_char(s, 'YYYY-MM-DD') as start_day,
      to_char(local, 'YYYY-MM-DD') as today
    from t`;

  const rows = await sql`
    select kind,
           extract(epoch from ts)::float8 * 1000 as ts,
           to_char(ts at time zone 'Europe/Oslo', 'YYYY-MM-DD') as day,
           extract(hour from ts at time zone 'Europe/Oslo')::int as hr,
           extract(isodow from ts at time zone 'Europe/Oslo')::int as dow,
           vid, visitor, path, ref_host, utm_source, utm_medium, utm_campaign,
           country, city, device, browser, os, lang, browser_lang, theme, mode,
           target, target_kind, data
    from events
    where ts >= to_timestamp(${w.prev_start}::float8 / 1000)
    order by ts
    limit ${MAX_ROWS}`;

  const [{ live }] = await sql`
    select count(distinct visitor)::int as live
    from events where ts > now() - interval '5 minutes'`;

  const days = Array.from({ length: n }, (_, i) => {
    const day = addDays(w.start_day, i);
    return { day, future: day > w.today };
  });
  const prevDays = days.map((d) => addDays(d.day, -n));

  const out = aggregate(
    rows.map((r) => ({ ...r, ts: Number(r.ts) })),
    { start: Number(w.start), prevStart: Number(w.prev_start), days, prevDays, live },
  );
  res.status(200).json({
    range,
    generatedAt: new Date().toISOString(),
    truncated: rows.length >= MAX_ROWS,
    ...out,
  });
}
