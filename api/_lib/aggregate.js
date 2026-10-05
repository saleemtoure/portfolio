// Turns raw event rows into everything the dashboard shows. Pure and
// synchronous so it can be tested without a database.
//
// Rows carry: kind, ts (ms), day (YYYY-MM-DD, Oslo), hr, dow (1=Mon), vid,
// visitor, path, ref_host, utm_*, country, city, device, browser, os, lang,
// browser_lang, theme, mode, target, target_kind, data.
//
// A visit (session) is one visitor's run of page views with no gap longer
// than 30 minutes. Visitor hashes change daily, so a visit never spans
// midnight and "unique visitors" over several days is the sum of each day's
// uniques.

const SESSION_GAP = 30 * 60 * 1000;
const SITE = /(^|\.)saleemtoure\.com$/;

export function sourceOf(view) {
  const utm = (view.utm_source || "").toLowerCase();
  const h = utm || view.ref_host || "";
  if (!h || SITE.test(h)) return "direct";
  if (/linkedin|lnkd\.in/.test(h)) return "linkedin";
  if (/instagram/.test(h)) return "instagram";
  if (/facebook|^fb\.|^m\.facebook/.test(h)) return "facebook";
  if (/(^|\.)google\./.test(h) || h === "google") return "google";
  if (/bing|duckduckgo|yahoo|ecosia|kagi|startpage|brave/.test(h)) return "search";
  if (/github/.test(h)) return "github";
  if (/^t\.co$|twitter|(^|\.)x\.com$/.test(h)) return "x";
  if (/youtube|youtu\.be/.test(h)) return "youtube";
  if (/snapchat/.test(h)) return "snapchat";
  if (/tiktok/.test(h)) return "tiktok";
  if (/chatgpt|openai|claude\.ai|perplexity|gemini/.test(h)) return "ai";
  return h;
}

const tally = (map, key, by = 1) => map.set(key, (map.get(key) || 0) + by);

function top(map, total, limit = 10) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, n]) => ({ key, n, share: total ? n / total : 0 }));
}

function quantile(values, q) {
  if (!values.length) return null;
  const s = [...values].sort((a, b) => a - b);
  const i = Math.min(s.length - 1, Math.max(0, Math.ceil(q * s.length) - 1));
  return s[i];
}

const mean = (a) => (a.length ? a.reduce((x, y) => x + y, 0) / a.length : null);

// Everything for one time window.
function windowStats(rows) {
  const views = rows.filter((r) => r.kind === "view");
  const clicks = rows.filter((r) => r.kind === "click");

  // Latest leave report per page load.
  const leave = new Map();
  rows
    .filter((r) => r.kind === "leave" && r.data)
    .forEach((r) => {
      const prev = leave.get(r.vid);
      if (!prev || r.ts >= prev.ts) leave.set(r.vid, r);
    });
  const clicksByVid = new Map();
  clicks.forEach((c) => tally(clicksByVid, c.vid));

  // Sessions.
  const byVisitor = new Map();
  views.forEach((v) => {
    if (!byVisitor.has(v.visitor)) byVisitor.set(v.visitor, []);
    byVisitor.get(v.visitor).push(v);
  });
  const sessions = [];
  byVisitor.forEach((vs) => {
    vs.sort((a, b) => a.ts - b.ts);
    let cur = null;
    vs.forEach((v) => {
      if (!cur || v.ts - cur.last > SESSION_GAP) {
        cur = { views: [], last: v.ts, first: v };
        sessions.push(cur);
      }
      cur.views.push(v);
      cur.last = v.ts;
    });
  });
  sessions.forEach((s) => {
    s.active = s.views.reduce(
      (t, v) => t + ((leave.get(v.vid) && leave.get(v.vid).data.a) || 0),
      0,
    );
    s.clicks = s.views.reduce((t, v) => t + (clicksByVid.get(v.vid) || 0), 0);
    s.source = sourceOf(s.first);
    s.bounce = s.views.length === 1 && s.clicks === 0 && s.active < 10000;
  });

  const visitors = new Set(views.map((v) => v.visitor)).size;
  const scrolls = [...leave.values()]
    .map((l) => l.data.s)
    .filter((s) => typeof s === "number");

  const kpis = {
    visits: sessions.length,
    visitors,
    pageviews: views.length,
    avgVisitMs: sessions.length ? mean(sessions.map((s) => s.active)) : null,
    bounce: sessions.length
      ? sessions.filter((s) => s.bounce).length / sessions.length
      : null,
    pagesPerVisit: sessions.length ? views.length / sessions.length : null,
    avgScroll: mean(scrolls),
    clicks: clicks.length,
  };

  return { views, clicks, leave, sessions, kpis };
}

export function aggregate(rows, { start, prevStart, days, prevDays, live = 0 }) {
  const cur = windowStats(rows.filter((r) => r.ts >= start));
  const prev = windowStats(rows.filter((r) => r.ts >= prevStart && r.ts < start));
  const { views, clicks, leave, sessions } = cur;

  // Visits per day, current and previous period lined up by position.
  const perDay = (ss) => {
    const m = new Map();
    ss.forEach((s) => tally(m, s.first.day));
    return m;
  };
  const curDay = perDay(sessions);
  const prevDay = perDay(prev.sessions);
  const series = days.map((d, i) => ({
    day: d.day,
    future: d.future,
    v: d.future ? null : curDay.get(d.day) || 0,
    p: prevDays[i] ? prevDay.get(prevDays[i]) || 0 : 0,
  }));

  // When people visit: weekday × hour.
  const heat = Array.from({ length: 7 }, () => Array(24).fill(0));
  sessions.forEach((s) => heat[s.first.dow - 1][s.first.hr]++);

  // Sources, devices, browsers, OS by visit.
  const src = new Map();
  const dev = new Map();
  const brw = new Map();
  const osm = new Map();
  sessions.forEach((s) => {
    tally(src, s.source);
    tally(dev, s.first.device);
    tally(brw, s.first.browser);
    tally(osm, s.first.os);
  });

  // UTM campaigns.
  const utm = new Map();
  sessions.forEach((s) => {
    const f = s.first;
    if (f.utm_source || f.utm_campaign)
      tally(utm, [f.utm_source, f.utm_medium, f.utm_campaign].filter(Boolean).join(" / "));
  });

  // Countries and cities by unique visitor.
  const ctry = new Map();
  const city = new Map();
  const seenC = new Set();
  views.forEach((v) => {
    if (seenC.has(v.visitor)) return;
    seenC.add(v.visitor);
    tally(ctry, v.country || "??");
    if (v.city) tally(city, `${v.city}, ${v.country || "??"}`);
  });

  // Language, theme and mode by page view.
  const lang = new Map();
  const blang = new Map();
  const theme = new Map();
  const mode = new Map();
  views.forEach((v) => {
    if (v.lang) tally(lang, v.lang);
    if (v.browser_lang) tally(blang, v.browser_lang.slice(0, 2).toLowerCase());
    if (v.theme) tally(theme, v.theme);
    if (v.mode) tally(mode, v.mode);
  });

  // Pages.
  const pages = new Map();
  const page = (p) => {
    if (!pages.has(p))
      pages.set(p, {
        path: p,
        views: 0,
        visitors: new Set(),
        active: [],
        scroll: [],
        entries: 0,
        exits: 0,
        direct: 0,
        clicks: 0,
      });
    return pages.get(p);
  };
  views.forEach((v) => {
    const pg = page(v.path);
    pg.views++;
    pg.visitors.add(v.visitor);
    const l = leave.get(v.vid);
    if (l) {
      if (typeof l.data.a === "number") pg.active.push(l.data.a);
      if (typeof l.data.s === "number") pg.scroll.push(l.data.s);
    }
  });
  sessions.forEach((s) => {
    const entry = page(s.first.path);
    entry.entries++;
    if (s.source === "direct") entry.direct++;
    page(s.views[s.views.length - 1].path).exits++;
  });
  clicks.forEach((c) => page(c.path).clicks++);
  const pageList = [...pages.values()]
    .map((p) => ({
      path: p.path,
      views: p.views,
      visitors: p.visitors.size,
      avgMs: mean(p.active),
      avgScroll: mean(p.scroll),
      entries: p.entries,
      exits: p.exits,
      direct: p.direct,
      clickRate: p.views ? p.clicks / p.views : 0,
    }))
    .sort((a, b) => b.views - a.views);

  // Time per section, per page. Reach is the share of reported page loads
  // where the section was on screen for at least a second.
  const sec = new Map();
  leave.forEach((l) => {
    const path = l.path;
    if (!sec.has(path)) sec.set(path, { loads: 0, keys: new Map() });
    const s = sec.get(path);
    s.loads++;
    Object.entries(l.data.sec || {}).forEach(([k, ms]) => {
      if (!s.keys.has(k)) s.keys.set(k, []);
      s.keys.get(k).push(ms);
    });
  });
  const sections = {};
  sec.forEach((s, path) => {
    sections[path] = {
      loads: s.loads,
      items: [...s.keys.entries()]
        .map(([key, ms]) => ({
          key,
          avgMs: mean(ms),
          totalMs: ms.reduce((a, b) => a + b, 0),
          reach: ms.length / s.loads,
        }))
        .sort((a, b) => b.totalMs - a.totalMs),
    };
  });

  // Clicks.
  const tgt = new Map();
  const kinds = new Map();
  clicks.forEach((c) => {
    const k = `${c.target_kind}\u0000${c.target}`;
    if (!tgt.has(k))
      tgt.set(k, { kind: c.target_kind, target: c.target, n: 0, pages: new Set() });
    const t = tgt.get(k);
    t.n++;
    t.pages.add(c.path);
    tally(kinds, c.target_kind);
  });
  const clickList = [...tgt.values()]
    .sort((a, b) => b.n - a.n)
    .slice(0, 25)
    .map((t) => ({ kind: t.kind, target: t.target, n: t.n, pages: [...t.pages] }));

  // Common journeys through the site.
  const paths = new Map();
  sessions.forEach((s) => {
    const seq = [];
    s.views.forEach((v) => {
      if (seq[seq.length - 1] !== v.path) seq.push(v.path);
    });
    tally(paths, seq.slice(0, 6).join(" → "));
  });

  // Core Web Vitals from real visits: 75th percentile and share rated good.
  const vit = { lcp: [], inp: [], cls: [] };
  leave.forEach((l) => {
    ["lcp", "inp", "cls"].forEach((k) => {
      if (typeof l.data[k] === "number") vit[k].push(l.data[k]);
    });
  });
  const GOOD = { lcp: 2500, inp: 200, cls: 0.1 };
  const POOR = { lcp: 4000, inp: 500, cls: 0.25 };
  const vitals = {};
  const goodShares = [];
  Object.keys(vit).forEach((k) => {
    const a = vit[k];
    const p75 = quantile(a, 0.75);
    const good = a.length ? a.filter((x) => x <= GOOD[k]).length / a.length : null;
    if (good != null) goodShares.push(good);
    vitals[k] = {
      p75,
      n: a.length,
      good,
      rating:
        p75 == null ? null : p75 <= GOOD[k] ? "good" : p75 <= POOR[k] ? "ni" : "poor",
    };
  });

  const nSess = sessions.length;
  return {
    live,
    kpis: cur.kpis,
    prevKpis: prev.kpis,
    series,
    heat,
    sources: top(src, nSess, 12),
    devices: top(dev, nSess),
    browsers: top(brw, nSess, 8),
    os: top(osm, nSess, 8),
    utm: top(utm, nSess, 10),
    countries: top(ctry, seenC.size, 10),
    cities: top(city, seenC.size, 10),
    lang: top(lang, views.length),
    browserLang: top(blang, views.length, 8),
    theme: top(theme, views.length),
    mode: top(mode, views.length),
    pages: pageList,
    sections,
    clicks: clickList,
    clickKinds: top(kinds, clicks.length),
    journeys: top(paths, nSess, 8),
    vitals,
    healthScore: goodShares.length ? Math.round(mean(goodShares) * 100) : null,
  };
}
