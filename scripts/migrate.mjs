// Creates the analytics tables. Reads DATABASE_URL from the environment or
// from .env.local (written by `vercel env pull`). Safe to run repeatedly.
import { readFileSync, existsSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL && existsSync(".env.local")) {
  for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = line.match(/^([A-Z0-9_]+)="?(.*?)"?$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not set. Run `vercel env pull .env.local` first.");
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);
const statements = readFileSync("api/_lib/schema.sql", "utf8")
  .replace(/--.*$/gm, "")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean);
for (const s of statements) await sql.query(s);
console.log(`Applied ${statements.length} statements.`);
