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
  // Per-IP limit, plus a global one so rotating IPs doesn't buy unlimited
  // guesses.
  const [{ mine, total }] = await sql`
    select count(*) filter (where who = ${who})::int as mine,
           count(*)::int as total
    from login_attempts where ts > now() - ${WINDOW}::interval`;
  if (mine >= MAX_FAILS || total >= MAX_FAILS * 6)
    return res.status(429).json({ error: "too_many" });

  const password = req.body && req.body.password;
  if (!passwordOk(password)) {
    await sql`insert into login_attempts (who) values (${who})`;
    await new Promise((r) => setTimeout(r, 400));
    return res.status(401).json({ error: "wrong" });
  }
  await sql`delete from login_attempts where who = ${who}`;
  issueCookie(res);
  res.status(204).end();
}
