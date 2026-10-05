import crypto from "node:crypto";

// Admin auth is one password (ADMIN_PASSWORD) and a signed, HttpOnly cookie
// scoped to /api. The cookie holds only an expiry and its HMAC, so there is no
// session table to keep, and rotating ADMIN_SECRET logs every browser out.
const COOKIE = "sto_admin";
const TTL = 7 * 24 * 3600;

function secret() {
  const s = process.env.ADMIN_SECRET;
  if (!s || s.length < 32) throw new Error("ADMIN_SECRET is missing or too short");
  return s;
}

const hmac = (msg) =>
  crypto.createHmac("sha256", secret()).update(msg).digest("base64url");

function safeEqual(a, b) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

export function passwordOk(given) {
  const want = process.env.ADMIN_PASSWORD;
  if (!want || typeof given !== "string" || !given) return false;
  // Hash both sides first so the comparison is constant-time regardless of
  // the lengths involved.
  const h = (s) => crypto.createHash("sha256").update(s).digest("hex");
  return safeEqual(h(given), h(want));
}

export function issueCookie(res) {
  const exp = Math.floor(Date.now() / 1000) + TTL;
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=${exp}.${hmac("admin:" + exp)}; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=${TTL}`,
  );
}

export function clearCookie(res) {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=; Path=/api; HttpOnly; Secure; SameSite=Strict; Max-Age=0`,
  );
}

export function isAdmin(req) {
  const raw = String(req.headers.cookie || "")
    .split(";")
    .map((c) => c.trim())
    .find((c) => c.startsWith(COOKIE + "="));
  if (!raw) return false;
  const [exp, sig] = raw.slice(COOKIE.length + 1).split(".");
  if (!/^\d+$/.test(exp || "") || !sig) return false;
  if (Number(exp) < Date.now() / 1000) return false;
  return safeEqual(sig, hmac("admin:" + exp));
}

// A per-IP key for rate limiting failed logins, hashed so no IP is stored.
export function clientKey(req) {
  const ip = String(
    req.headers["x-real-ip"] ||
      String(req.headers["x-forwarded-for"] || "").split(",")[0] ||
      "",
  ).trim();
  return hmac("login:" + ip).slice(0, 32);
}
