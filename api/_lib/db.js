import { neon } from "@neondatabase/serverless";

let sql;

// One HTTP-based client per function instance. DATABASE_URL is injected by
// the Neon integration on Vercel and never reaches the browser.
export function db() {
  if (!sql) sql = neon(process.env.DATABASE_URL);
  return sql;
}

// The calendar day in Norway, as YYYY-MM-DD. Salts and daily charts both
// follow Oslo time so "today" means the same thing everywhere.
export function osloDay(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Oslo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}
