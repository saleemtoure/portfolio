-- Analytics schema. Run once with `node scripts/migrate.mjs`; safe to re-run.

-- One row per tracked event. `vid` ties a page load's view, clicks and leave
-- report together; `visitor` is a hash salted per day, so it can't be linked
-- across days. No IP address is ever stored.
create table if not exists events (
  id bigint generated always as identity primary key,
  ts timestamptz not null default now(),
  kind text not null,
  vid text not null,
  visitor text not null,
  path text not null,
  ref_host text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  country text,
  city text,
  device text,
  browser text,
  os text,
  lang text,
  browser_lang text,
  theme text,
  mode text,
  screen text,
  target text,
  target_kind text,
  data jsonb
);
create index if not exists events_ts on events (ts);

-- Today's random salt. Yesterday's is deleted, which is what makes old
-- visitor hashes impossible to recompute.
create table if not exists salts (
  day date primary key,
  salt text not null
);

-- Failed admin logins, keyed by a salted hash, for rate limiting.
create table if not exists login_attempts (
  ts timestamptz not null default now(),
  who text not null
);
create index if not exists login_attempts_ts on login_attempts (ts);
