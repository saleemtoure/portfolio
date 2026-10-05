// Anonymous, cookie-free page statistics for the /admin dashboard.
//
// Nothing is written to the visitor's device: no cookies, no localStorage.
// Each page load gets a random id that lives only in memory, and the server
// turns IP + browser into a hash with a salt that is thrown away every day,
// so a visitor can't be followed from one day to the next.
//
// Three kinds of event go to /api/collect:
//   view   on load — page, referrer, UTM tags, language, theme, screen width
//   click  links, buttons and the link menus — what was clicked, not where
//   leave  when the tab is hidden or closed — active time, scroll depth,
//          seconds each section was on screen, and Core Web Vitals
(() => {
  // The owner's own browser can opt out from the dashboard. This is the one
  // read of storage, and it only ever exists on the owner's device.
  try {
    if (localStorage.getItem("sto-analytics-optout") === "1") return;
  } catch {
    /* storage blocked — nothing to opt out of */
  }
  if (navigator.webdriver) return;
  if (!/(^|\.)saleemtoure\.com$/.test(location.hostname)) return;

  const ENDPOINT = "/api/collect";
  const IDLE_MS = 60000;
  const vid =
    (crypto.randomUUID && crypto.randomUUID()) ||
    Math.random().toString(36).slice(2) + Date.now().toString(36);
  const path = location.pathname;
  const root = document.documentElement;

  function send(kind, extra) {
    const body = JSON.stringify({ k: kind, v: vid, p: path, ...extra });
    try {
      const blob = new Blob([body], { type: "text/plain" });
      if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, blob)) return;
    } catch {
      /* fall through to fetch */
    }
    fetch(ENDPOINT, { method: "POST", body, keepalive: true }).catch(() => {});
  }

  function context() {
    return { l: root.lang, t: root.dataset.theme, m: root.dataset.mode };
  }

  // ── view ──────────────────────────────────────────────────────────────
  const q = new URLSearchParams(location.search);
  send("view", {
    r: document.referrer,
    u: {
      s: q.get("utm_source"),
      m: q.get("utm_medium"),
      c: q.get("utm_campaign"),
    },
    bl: navigator.language,
    sw: window.innerWidth,
    ...context(),
  });

  // ── click ─────────────────────────────────────────────────────────────
  function describe(el) {
    if (el.matches("[data-lang]")) return ["control", "lang:" + el.dataset.lang];
    if (el.matches("[data-mode]")) return ["control", "mode:" + el.dataset.mode];
    if (el.matches("[data-theme]"))
      return ["control", "theme:" + el.dataset.theme];
    if (el.matches("[data-link-menu]"))
      return ["menu", "menu:" + el.dataset.linkMenu];
    const href = el.getAttribute("href");
    if (el.tagName === "A" && href) {
      if (href.startsWith("mailto:")) return ["contact", "email"];
      if (href.startsWith("tel:")) return ["contact", "phone"];
      const url = new URL(href, location.href);
      if (url.host !== location.host)
        return [
          "outbound",
          (url.host.replace(/^www\./, "") + url.pathname).replace(/\/$/, ""),
        ];
      if (url.pathname === location.pathname && url.hash)
        return ["nav", url.hash];
      if (/\.pdf$/i.test(url.pathname)) return ["download", url.pathname];
      return ["internal", url.pathname + url.hash];
    }
    const name =
      el.id ||
      el.getAttribute("data-i18n") ||
      el.getAttribute("aria-label") ||
      (el.textContent || "").trim().slice(0, 40);
    return ["control", name || el.tagName.toLowerCase()];
  }

  document.addEventListener(
    "click",
    (e) => {
      const el = e.target.closest && e.target.closest("a, button, summary");
      if (!el) return;
      const [tk, tg] = describe(el);
      send("click", { tk, tg, ...context() });
    },
    { capture: true, passive: true },
  );

  // ── leave: active time, scroll depth, time per section ───────────────
  // Sections are keyed by something that doesn't change with the language:
  // their id, then aria-label, then the heading's i18n key, then its text.
  const slug = (s) =>
    (s || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^\w\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .slice(0, 40);
  const sections = Array.from(
    document.querySelectorAll("section.panel, section.ch-hero, section.ch-section"),
  );
  const keys = new Map();
  sections.forEach((s, i) => {
    const h = s.querySelector("h2");
    keys.set(
      s,
      s.id ||
        slug(s.getAttribute("aria-label")) ||
        (h && h.dataset.i18n) ||
        slug(h && h.textContent) ||
        "section-" + (i + 1),
    );
  });

  // A section counts as "on screen" when it fills a good share of the
  // viewport. Tall sections never reach a high intersection ratio, so the
  // share of the viewport they cover is what matters, not the ratio alone.
  const onScreen = new Set();
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        const vp = window.innerWidth * window.innerHeight;
        entries.forEach((en) => {
          const r = en.intersectionRect;
          const cover = (r.width * r.height) / vp;
          if (en.isIntersecting && (cover >= 0.35 || en.intersectionRatio >= 0.6))
            onScreen.add(en.target);
          else onScreen.delete(en.target);
        });
      },
      { threshold: [0, 0.2, 0.35, 0.5, 0.6, 0.8, 1] },
    );
    sections.forEach((s) => io.observe(s));
  }

  let active = 0;
  let lastInput = Date.now();
  let lastTick = Date.now();
  let maxScroll = 0;
  const secMs = {};

  ["pointermove", "pointerdown", "keydown", "scroll", "wheel", "touchstart"].forEach(
    (t) =>
      addEventListener(t, () => (lastInput = Date.now()), {
        passive: true,
        capture: true,
      }),
  );

  function measureScroll() {
    const h = document.documentElement.scrollHeight;
    const seen = h > 0 ? (window.scrollY + window.innerHeight) / h : 1;
    maxScroll = Math.max(maxScroll, Math.min(100, Math.round(seen * 100)));
  }
  addEventListener("scroll", measureScroll, { passive: true });
  measureScroll();

  setInterval(() => {
    const now = Date.now();
    const dt = Math.min(now - lastTick, 5000);
    lastTick = now;
    if (document.visibilityState !== "visible" || now - lastInput > IDLE_MS)
      return;
    active += dt;
    onScreen.forEach((s) => {
      const k = keys.get(s);
      secMs[k] = (secMs[k] || 0) + dt;
    });
  }, 1000);

  // ── Core Web Vitals (approximate, Chromium-family browsers) ───────────
  const vitals = {};
  function observe(type, fn, opts) {
    try {
      new PerformanceObserver((l) => fn(l.getEntries())).observe({
        type,
        buffered: true,
        ...opts,
      });
    } catch {
      /* unsupported in this browser */
    }
  }
  observe("largest-contentful-paint", (es) => {
    vitals.lcp = Math.round(es[es.length - 1].startTime);
  });
  observe("layout-shift", (es) => {
    es.forEach((e) => {
      if (!e.hadRecentInput) vitals.cls = (vitals.cls || 0) + e.value;
    });
  });
  observe(
    "event",
    (es) => {
      es.forEach((e) => {
        if (e.interactionId)
          vitals.inp = Math.max(vitals.inp || 0, Math.round(e.duration));
      });
    },
    { durationThreshold: 40 },
  );

  // Sent every time the page is hidden, with running totals. The server keeps
  // the latest report per page load, so switching tabs back and forth is safe.
  let lastSent = "";
  function leave() {
    measureScroll();
    const sec = {};
    Object.keys(secMs).forEach((k) => {
      if (secMs[k] >= 1000) sec[k] = Math.round(secMs[k]);
    });
    const d = { a: Math.round(active), s: maxScroll, sec };
    if (vitals.lcp != null) d.lcp = vitals.lcp;
    if (vitals.inp != null) d.inp = vitals.inp;
    if (vitals.cls != null) d.cls = Math.round(vitals.cls * 1000) / 1000;
    const body = JSON.stringify(d);
    if (body === lastSent) return;
    lastSent = body;
    send("leave", { d, ...context() });
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") leave();
  });
  addEventListener("pagehide", leave);
})();
