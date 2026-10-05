// Small, dependency-free parsers for what the collector stores. They only
// need to be good enough to group a personal site's traffic, not perfect.

export const SITE_HOSTS = new Set(["saleemtoure.com", "www.saleemtoure.com"]);

export const BOT_UA =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|pingdom|uptime|monitor|preview|scan|curl|wget|python|node-fetch|axios|go-http|java\//i;

export function device(ua) {
  if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) return "tablet";
  if (/Mobi|iPhone|iPod|Android/i.test(ua)) return "mobile";
  return "desktop";
}

export function browser(ua) {
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/SamsungBrowser/.test(ua)) return "Samsung Internet";
  if (/Firefox|FxiOS/.test(ua)) return "Firefox";
  if (/CriOS|Chrome\//.test(ua)) return "Chrome";
  if (/Safari\//.test(ua)) return "Safari";
  return "Other";
}

export function os(ua) {
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Windows/.test(ua)) return "Windows";
  if (/CrOS/.test(ua)) return "ChromeOS";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Linux/.test(ua)) return "Linux";
  return "Other";
}

// "/", "/index.html" → "/"; "/mss.html" → "/mss". Anything that doesn't look
// like one of the site's own paths is rejected rather than stored.
export function normPath(p) {
  if (typeof p !== "string") return null;
  let s = p.split(/[?#]/)[0].toLowerCase();
  if (!/^\/[a-z0-9\-_/.]{0,80}$/.test(s)) return null;
  s = s.replace(/\/index\.html$/, "/").replace(/\.html$/, "");
  if (s.length > 1) s = s.replace(/\/$/, "");
  return s || "/";
}

export function refHost(r) {
  if (typeof r !== "string" || !r) return null;
  try {
    const u = new URL(r);
    if (!/^https?:$/.test(u.protocol)) return null;
    return u.hostname.toLowerCase().replace(/^www\./, "").slice(0, 80);
  } catch {
    return null;
  }
}

export function clip(v, n) {
  if (v == null) return null;
  const s = String(v).trim();
  return s ? s.slice(0, n) : null;
}

const num = (v, max) =>
  typeof v === "number" && Number.isFinite(v) && v >= 0 ? Math.min(v, max) : undefined;

// The leave report: active ms, scroll %, ms per section, and vitals. Every
// field is range-checked and the section map is capped, so a forged beacon
// can't bloat a row.
export function leaveData(d) {
  if (!d || typeof d !== "object") return null;
  const out = {};
  const a = num(d.a, 6 * 3600e3);
  if (a !== undefined) out.a = Math.round(a);
  const s = num(d.s, 100);
  if (s !== undefined) out.s = Math.round(s);
  const lcp = num(d.lcp, 120e3);
  if (lcp !== undefined) out.lcp = Math.round(lcp);
  const inp = num(d.inp, 60e3);
  if (inp !== undefined) out.inp = Math.round(inp);
  const cls = num(d.cls, 100);
  if (cls !== undefined) out.cls = Math.round(cls * 1000) / 1000;
  if (d.sec && typeof d.sec === "object") {
    out.sec = {};
    Object.keys(d.sec)
      .slice(0, 40)
      .forEach((k) => {
        const key = clip(k, 40);
        const v = num(d.sec[k], 6 * 3600e3);
        if (key && /^[\w#:.\-]+$/.test(key) && v !== undefined)
          out.sec[key] = Math.round(v);
      });
  }
  return out;
}
