import { clearCookie } from "./_lib/auth.js";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).end();
  clearCookie(res);
  res.status(204).end();
}
