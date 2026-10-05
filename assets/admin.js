// Admin analytics dashboard. Data comes from /api/stats (login required);
// the health checklist is worked out here from the site's own HTML, so
// nothing depends on Google or any other third party.
//
// Every string that originates from a visitor (click targets, cities, UTM
// tags, referrer hosts) is escaped before it reaches innerHTML — a beacon can
// be forged, so the dashboard must never trust what it is showing.

const T = {
  no: {
    eyebrow: "Admin — saleemtoure.com",
    title: "Besøk &amp; <em>oppmerksomhet</em>.",
    loginTitle: "Logg <em>inn</em>.",
    password: "Passord",
    signIn: "Logg inn",
    wrong: "Feil passord.",
    tooMany: "For mange forsøk. Prøv igjen om et kvarter.",
    failed: "Noe gikk galt. Prøv igjen.",
    logout: "Logg ut",
    light: "Lys",
    dark: "Mørk",
    rWeek: "Denne uka",
    r7: "7 dager",
    r30: "30 dager",
    r90: "90 dager",
    live: (n) => `${n} på siden nå`,
    empty:
      "Ingen besøk registrert i denne perioden ennå. Statistikken fylles på etter hvert som folk besøker siden.",
    visits: "Besøk",
    visitors: "Unike besøkende",
    avgVisit: "Snitt tid per besøk",
    bounce: "Fluktrate",
    pageviews: "Sidevisninger",
    pagesPerVisit: "Sider per besøk",
    avgScroll: "Snitt scrolldybde",
    clicksKpi: "Klikk",
    vsPrev: (r) => (r === "week" ? "mot samme tid forrige uke" : `mot forrige ${r} dager`),
    noPrev: "ingen data før",
    traffic: "Trafikk over tid",
    prevPeriod: "Forrige periode",
    sources: "Kilder",
    shareOfVisits: "Andel av besøk",
    devices: "Enheter",
    topPages: "Mest besøkte sider",
    page: "Side",
    views: "Visninger",
    avgTime: "Snitt tid",
    scroll: "Scroll",
    pageSub: (p) =>
      `${p.visitors} unike · ${p.entries} innganger · ${p.direct} direkte · ${p.exits} utganger`,
    countries: "Land",
    uniqueVisitors: "Unike besøkende",
    topCities: "Byer",
    timeTitle: "Hvor <em>tiden</em> brukes",
    timeNote:
      "Snitt sekunder hver del av siden var på skjermen mens noen var aktive, og hvor stor andel av sidevisningene som nådde dit.",
    reached: (p) => `nådd av ${p}`,
    noSections: "Ingen målinger for denne siden ennå.",
    clicks: "Klikk",
    clickMeta: (n) => `${n} totalt`,
    target: "Hva",
    clicksCol: "Klikk",
    kinds: {
      outbound: "Ekstern lenke",
      internal: "Intern lenke",
      nav: "Hopp på siden",
      menu: "Lenkemeny",
      control: "Knapp",
      contact: "Kontakt",
      download: "Nedlasting",
    },
    journeys: "Vanlige ruter",
    campaigns: "Kampanjer",
    noCampaigns: "Ingen UTM-lenker brukt ennå. Legg til ?utm_source=instagram på lenker du deler.",
    when: "Når folk kommer",
    whenMeta: "Ukedag × time, norsk tid",
    days: ["Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"],
    language: "Språk på siden",
    themesH: "Tema og modus",
    browsers: "Nettlesere",
    systems: "Operativsystem",
    healthEyebrow: "Sidehelse",
    healthTitle: "Ytelse &amp; <em>SEO</em>",
    healthSource: "Kilde: ekte besøk + sidens egen HTML",
    checklist: "Sjekkliste",
    checkMeta: (ok, bad) => `${ok} ok · ${bad} å se på`,
    pageHealth: "Sidehelse",
    vitalsNote:
      "75-persentil fra ekte besøk i perioden. Måles bare i Chromium-baserte nettlesere.",
    good: "Bra",
    ni: "Kan forbedres",
    poor: "Dårlig",
    noData: "Ingen data",
    samples: (n) => `${n} målinger`,
    serpTitle: "Forhåndsvisning i søk",
    noDesc: "Ingen meta-beskrivelse.",
    st: { ok: "OK", warn: "Advarsel", bad: "Fiks" },
    updated: (d) => `Sist oppdatert ${d}`,
    optout: "Ikke tell mine besøk i denne nettleseren",
    back: "← Til nettsiden",
    other: "Andre",
    unknown: "Ukjent",
    deviceNames: { mobile: "Mobil", desktop: "Desktop", tablet: "Nettbrett" },
    modeNames: { light: "Lys", dark: "Mørk" },
    sourceNames: {
      direct: ["Direkte", "Skrevet inn / bokmerke / app"],
      linkedin: ["LinkedIn", "linkedin.com"],
      instagram: ["Instagram", "instagram.com"],
      facebook: ["Facebook", "facebook.com"],
      google: ["Google", "Organisk søk"],
      search: ["Andre søkemotorer", "Bing, DuckDuckGo …"],
      github: ["GitHub", "github.com"],
      x: ["X", "x.com"],
      youtube: ["YouTube", "youtube.com"],
      snapchat: ["Snapchat", "snapchat.com"],
      tiktok: ["TikTok", "tiktok.com"],
      ai: ["AI-assistenter", "ChatGPT, Claude, Perplexity …"],
    },
    pageNames: { "/": "Forside", "/mss": "MSS", "/medina": "Medina", "/showtime": "ShowTime" },
    sectionNames: {
      "panel-hero": "Intro",
      "quran-2662": "Ayah",
      "panel-projects": "StoureSweets",
      majmio: "Majmio",
      projHicssTitle: "HICSS",
      taaruf: "Taaruf",
      projSecretTitle: "Hemmelig prosjekt",
      talab: "Talab",
      "panel-founder": "Gründer",
      "panel-chapters": "Kapitler",
      "panel-education": "Utdanning",
      "panel-work": "Erfaring",
      "panel-cv": "CV",
      "ch-top": "Toppen",
      mssJourneyTitle: "Min MSS-reise",
      "sahih-al-bukhari-1876": "Hadith",
      eduTitle: "Studier",
      stStoryTitle: "ShowTime-historien",
    },
    checks: {
      title: "Tittel",
      titleLen: (n) => `${n} tegn — over 60 kuttes i søk`,
      desc: "Meta-beskrivelse",
      descMissing: "Mangler. Legg til 120–160 tegn om hvem du er.",
      descLen: (n) => `${n} tegn — 70–160 er idealt`,
      og: "Delingsbilde (Open Graph)",
      ogMissing: "Mangler — delinger på LinkedIn vises uten bilde.",
      canonical: "Kanonisk URL",
      canonicalMissing: "Mangler rel=canonical.",
      lang: "Språk satt på siden",
      alt: "Alt-tekst på bilder",
      altMissing: (n) => `${n} bilde(r) mangler alt-tekst.`,
      altOk: "Alle bilder har alt-tekst.",
      sitemap: "sitemap.xml",
      sitemapMissing: "Finnes ikke. Gjør det lettere for søkemotorer å finne alle sidene.",
      robots: "robots.txt",
      robotsMissing: "Finnes ikke. Ikke kritisk, men vanlig å ha.",
      found: "Funnet",
      https: "HTTPS",
      httpsOk: "Siden serveres kryptert.",
    },
  },
  en: {
    eyebrow: "Admin — saleemtoure.com",
    title: "Visits &amp; <em>attention</em>.",
    loginTitle: "Sign <em>in</em>.",
    password: "Password",
    signIn: "Sign in",
    wrong: "Wrong password.",
    tooMany: "Too many attempts. Try again in 15 minutes.",
    failed: "Something went wrong. Try again.",
    logout: "Sign out",
    light: "Light",
    dark: "Dark",
    rWeek: "This week",
    r7: "7 days",
    r30: "30 days",
    r90: "90 days",
    live: (n) => `${n} on the site now`,
    empty: "No visits recorded in this period yet. Stats fill in as people visit the site.",
    visits: "Visits",
    visitors: "Unique visitors",
    avgVisit: "Avg time per visit",
    bounce: "Bounce rate",
    pageviews: "Page views",
    pagesPerVisit: "Pages per visit",
    avgScroll: "Avg scroll depth",
    clicksKpi: "Clicks",
    vsPrev: (r) => (r === "week" ? "vs same point last week" : `vs previous ${r} days`),
    noPrev: "no earlier data",
    traffic: "Traffic over time",
    prevPeriod: "Previous period",
    sources: "Sources",
    shareOfVisits: "Share of visits",
    devices: "Devices",
    topPages: "Most visited pages",
    page: "Page",
    views: "Views",
    avgTime: "Avg time",
    scroll: "Scroll",
    pageSub: (p) =>
      `${p.visitors} unique · ${p.entries} entries · ${p.direct} direct · ${p.exits} exits`,
    countries: "Countries",
    uniqueVisitors: "Unique visitors",
    topCities: "Cities",
    timeTitle: "Where the <em>time</em> goes",
    timeNote:
      "Average seconds each part of the page was on screen while someone was active, and the share of page views that reached it.",
    reached: (p) => `reached by ${p}`,
    noSections: "No measurements for this page yet.",
    clicks: "Clicks",
    clickMeta: (n) => `${n} total`,
    target: "What",
    clicksCol: "Clicks",
    kinds: {
      outbound: "External link",
      internal: "Internal link",
      nav: "In-page jump",
      menu: "Link menu",
      control: "Button",
      contact: "Contact",
      download: "Download",
    },
    journeys: "Common paths",
    campaigns: "Campaigns",
    noCampaigns: "No UTM links used yet. Add ?utm_source=instagram to links you share.",
    when: "When people come",
    whenMeta: "Weekday × hour, Oslo time",
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    language: "Site language",
    themesH: "Theme and mode",
    browsers: "Browsers",
    systems: "Operating systems",
    healthEyebrow: "Site health",
    healthTitle: "Performance &amp; <em>SEO</em>",
    healthSource: "Source: real visits + the site's own HTML",
    checklist: "Checklist",
    checkMeta: (ok, bad) => `${ok} ok · ${bad} to look at`,
    pageHealth: "Site health",
    vitalsNote:
      "75th percentile from real visits in this period. Only measured in Chromium-based browsers.",
    good: "Good",
    ni: "Needs work",
    poor: "Poor",
    noData: "No data",
    samples: (n) => `${n} samples`,
    serpTitle: "Search result preview",
    noDesc: "No meta description.",
    st: { ok: "OK", warn: "Warning", bad: "Fix" },
    updated: (d) => `Last updated ${d}`,
    optout: "Don't count my visits in this browser",
    back: "← Back to the site",
    other: "Other",
    unknown: "Unknown",
    deviceNames: { mobile: "Mobile", desktop: "Desktop", tablet: "Tablet" },
    modeNames: { light: "Light", dark: "Dark" },
    sourceNames: {
      direct: ["Direct", "Typed in / bookmark / app"],
      linkedin: ["LinkedIn", "linkedin.com"],
      instagram: ["Instagram", "instagram.com"],
      facebook: ["Facebook", "facebook.com"],
      google: ["Google", "Organic search"],
      search: ["Other search engines", "Bing, DuckDuckGo …"],
      github: ["GitHub", "github.com"],
      x: ["X", "x.com"],
      youtube: ["YouTube", "youtube.com"],
      snapchat: ["Snapchat", "snapchat.com"],
      tiktok: ["TikTok", "tiktok.com"],
      ai: ["AI assistants", "ChatGPT, Claude, Perplexity …"],
    },
    pageNames: { "/": "Home", "/mss": "MSS", "/medina": "Madinah", "/showtime": "ShowTime" },
    sectionNames: {
      "panel-hero": "Intro",
      "quran-2662": "Ayah",
      "panel-projects": "StoureSweets",
      majmio: "Majmio",
      projHicssTitle: "HICSS",
      taaruf: "Taaruf",
      projSecretTitle: "Secret project",
      talab: "Talab",
      "panel-founder": "Founder",
      "panel-chapters": "Chapters",
      "panel-education": "Education",
      "panel-work": "Experience",
      "panel-cv": "CV",
      "ch-top": "Top",
      mssJourneyTitle: "My MSS journey",
      "sahih-al-bukhari-1876": "Hadith",
      eduTitle: "Studies",
      stStoryTitle: "The ShowTime story",
    },
    checks: {
      title: "Title",
      titleLen: (n) => `${n} characters — over 60 gets cut off in search`,
      desc: "Meta description",
      descMissing: "Missing. Add 120–160 characters about who you are.",
      descLen: (n) => `${n} characters — 70–160 is ideal`,
      og: "Share image (Open Graph)",
      ogMissing: "Missing — LinkedIn shares show no image.",
      canonical: "Canonical URL",
      canonicalMissing: "No rel=canonical.",
      lang: "Page language set",
      alt: "Image alt text",
      altMissing: (n) => `${n} image(s) missing alt text.`,
      altOk: "Every image has alt text.",
      sitemap: "sitemap.xml",
      sitemapMissing: "Doesn't exist. Helps search engines find every page.",
      robots: "robots.txt",
      robotsMissing: "Doesn't exist. Not critical, but standard.",
      found: "Found",
      https: "HTTPS",
      httpsOk: "The site is served encrypted.",
    },
  },
};

const PAGES = ["/", "/mss", "/medina", "/showtime"];
const PAGE_FILES = { "/": "index.html", "/mss": "mss.html", "/medina": "medina.html", "/showtime": "showtime.html" };
// Display order for known sections; anything new falls in after these.
const SECTION_ORDER = Object.keys(T.no.sectionNames);

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );

function read(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}
function write(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* preference just won't persist */
  }
}

const st = {
  theme: themes[read("portfolio-theme")] ? read("portfolio-theme") : "medina",
  mode: read("portfolio-mode") === "dark" ? "dark" : "light",
  lang: read("portfolio-lang") === "en" ? "en" : "no",
  range: ["week", "7", "30", "90"].includes(read("admin-range")) ? read("admin-range") : "week",
  secPage: "/",
  data: null,
  checks: null,
};
const t = () => T[st.lang];
const locale = () => (st.lang === "en" ? "en-GB" : "nb-NO");
const fmt = (n) => (n == null ? "—" : Math.round(n).toLocaleString(locale()));
const pct = (x, d = 0) =>
  x == null ? "—" : (x * 100).toFixed(d).replace(".", st.lang === "no" ? "," : ".") + "%";
function dur(ms) {
  if (ms == null) return "—";
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${String(s % 60).padStart(2, "0")}s`;
}

// ── Theme, mode, language ─────────────────────────────────────────────────
function applyTheme() {
  const p = themes[st.theme][st.mode];
  const r = document.documentElement.style;
  ["bg", "fg", "muted", "accent", "line", "stripe"].forEach((k) => r.setProperty("--" + k, p[k]));
  r.setProperty("--accent-text", p.accentText);
  document.querySelectorAll(".sw").forEach((s) => {
    const on = s.dataset.theme === st.theme;
    s.classList.toggle("active", on);
    s.setAttribute("aria-pressed", on);
  });
  document.querySelectorAll("#mode button").forEach((b) => {
    const on = b.dataset.mode === st.mode;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
  write("portfolio-theme", st.theme);
  write("portfolio-mode", st.mode);
}

Object.entries(themes).forEach(([key, th]) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "sw";
  b.dataset.theme = key;
  b.title = th.label;
  b.setAttribute("aria-label", th.label);
  b.innerHTML = `<i style="background:${th.a}"></i><i style="background:${th.b}"></i>`;
  b.addEventListener("click", () => {
    st.theme = key;
    applyTheme();
    if (st.data) render();
  });
  $("themes").appendChild(b);
});
document.querySelectorAll("#mode button").forEach((b) =>
  b.addEventListener("click", () => {
    st.mode = b.dataset.mode;
    applyTheme();
    if (st.data) render();
  }),
);
document.querySelectorAll("#lang button").forEach((b) =>
  b.addEventListener("click", () => {
    st.lang = b.dataset.lang;
    write("portfolio-lang", st.lang);
    applyLang();
    if (st.data) render();
    if (st.checks) renderChecks();
  }),
);

function applyLang() {
  const d = t();
  document.documentElement.lang = st.lang;
  document.querySelectorAll("[data-t]").forEach((el) => {
    if (typeof d[el.dataset.t] === "string") el.textContent = d[el.dataset.t];
  });
  document.querySelectorAll("[data-t-html]").forEach((el) => {
    el.innerHTML = d[el.dataset.tHtml];
  });
  document.querySelectorAll("#lang button").forEach((b) => {
    const on = b.dataset.lang === st.lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
}

// ── Range ─────────────────────────────────────────────────────────────────
function syncRange() {
  document.querySelectorAll("#range button").forEach((b) => {
    const on = b.dataset.r === st.range;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on);
  });
}
document.querySelectorAll("#range button").forEach((b) =>
  b.addEventListener("click", () => {
    st.range = b.dataset.r;
    write("admin-range", st.range);
    syncRange();
    load();
  }),
);

// ── Opt-out of tracking for this browser ─────────────────────────────────
$("optout").checked = read("sto-analytics-optout") === "1";
$("optout").addEventListener("change", (e) => {
  try {
    if (e.target.checked) localStorage.setItem("sto-analytics-optout", "1");
    else localStorage.removeItem("sto-analytics-optout");
  } catch {
    /* storage blocked — nothing to persist */
  }
});

// ── Auth ──────────────────────────────────────────────────────────────────
function showLogin() {
  $("login").hidden = false;
  $("dash").hidden = true;
  $("logout").hidden = true;
  $("live").hidden = true;
  $("optoutWrap").hidden = true;
  $("pw").focus();
}
$("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  $("loginErr").textContent = "";
  try {
    const r = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: $("pw").value }),
    });
    if (r.status === 204) {
      $("pw").value = "";
      load();
      return;
    }
    $("loginErr").textContent = r.status === 429 ? t().tooMany : r.status === 401 ? t().wrong : t().failed;
  } catch {
    $("loginErr").textContent = t().failed;
  }
});
$("logout").addEventListener("click", async () => {
  await fetch("/api/logout", { method: "POST" }).catch(() => {});
  st.data = null;
  showLogin();
});

// ── Data ──────────────────────────────────────────────────────────────────
let loading = 0;
async function load() {
  const id = ++loading;
  let r;
  try {
    r = await fetch(`/api/stats?range=${encodeURIComponent(st.range)}`, { cache: "no-store" });
  } catch {
    return;
  }
  if (id !== loading) return;
  if (r.status === 401) return showLogin();
  if (!r.ok) return;
  st.data = await r.json();
  $("login").hidden = true;
  $("dash").hidden = false;
  $("logout").hidden = false;
  $("optoutWrap").hidden = false;
  render();
  if (!st.checks) runChecks();
}

// ── Rendering ─────────────────────────────────────────────────────────────
function delta(cur, prev, { invert = false, points = false } = {}) {
  if (cur == null || prev == null || (!points && !prev)) return `<b>·</b> ${esc(t().noPrev)}`;
  // Percentage points for rates, percent change for everything else. A move
  // in the unwanted direction (down, or up for bounce rate) is accented.
  const diff = points
    ? Math.round((cur - prev) * 100)
    : Math.round(((cur - prev) / prev) * 100);
  const txt = `${diff >= 0 ? "+" : ""}${diff}${points ? " pp" : "%"}`;
  const bad = invert ? diff > 0 : diff < 0;
  return `<b class="${bad ? "dn" : ""}">${txt}</b> ${esc(t().vsPrev(st.range))}`;
}

function kpi(label, value, d) {
  return `<div class="kpi"><span class="lbl">${esc(label)}</span><span class="val">${value}</span><span class="delta">${d}</span></div>`;
}

function row(label, sub, right, share, max, acc) {
  const w = max ? Math.max(1, (share / max) * 100) : 0;
  return `<div class="row${acc ? " acc" : ""}"><span>${label}${sub ? ` <span class="sub">· ${sub}</span>` : ""}</span><span>${right}</span><div class="bar"><i style="width:${w}%"></i></div></div>`;
}

function countryName(code) {
  if (!code || code === "??") return t().unknown;
  try {
    return new Intl.DisplayNames([locale()], { type: "region" }).of(code) || code;
  } catch {
    return code;
  }
}

function sourceLabel(key) {
  const n = t().sourceNames[key];
  return n ? [esc(n[0]), esc(n[1])] : [esc(key), ""];
}

const pageName = (p) => t().pageNames[p] || p;
const sectionName = (k) => t().sectionNames[k] || k;

function render() {
  const d = st.data;
  const k = d.kpis;
  const pk = d.prevKpis;
  const L = t();
  applyLang();

  $("live").hidden = false;
  $("live").textContent = L.live(d.live);
  $("updated").textContent = L.updated(
    new Date(d.generatedAt).toLocaleString(locale(), { dateStyle: "short", timeStyle: "short" }),
  );
  $("empty").hidden = k.pageviews > 0;

  $("kpis").innerHTML = [
    kpi(L.visits, fmt(k.visits), delta(k.visits, pk.visits)),
    kpi(L.visitors, fmt(k.visitors), delta(k.visitors, pk.visitors)),
    kpi(L.avgVisit, dur(k.avgVisitMs), delta(k.avgVisitMs, pk.avgVisitMs)),
    kpi(L.bounce, pct(k.bounce), delta(k.bounce, pk.bounce, { invert: true, points: true })),
  ].join("");
  $("kpis2").innerHTML = [
    kpi(L.pageviews, fmt(k.pageviews), delta(k.pageviews, pk.pageviews)),
    kpi(
      L.pagesPerVisit,
      k.pagesPerVisit == null ? "—" : k.pagesPerVisit.toFixed(1).replace(".", st.lang === "no" ? "," : "."),
      delta(k.pagesPerVisit, pk.pagesPerVisit),
    ),
    kpi(L.avgScroll, k.avgScroll == null ? "—" : Math.round(k.avgScroll) + "%", delta(k.avgScroll, pk.avgScroll)),
    kpi(L.clicksKpi, fmt(k.clicks), delta(k.clicks, pk.clicks)),
  ].join("");

  drawChart(d.series);

  // Sources
  const sMax = Math.max(0, ...d.sources.map((s) => s.share));
  $("sources").innerHTML = d.sources.length
    ? d.sources
        .slice(0, 6)
        .map((s, i) => {
          const [name, sub] = sourceLabel(s.key);
          return row(name, sub, pct(s.share), s.share, sMax, i === 0);
        })
        .join("")
    : `<p class="note">${esc(L.noData)}</p>`;

  // Devices
  split("devices", "devlg", d.devices, (key) => L.deviceNames[key] || key);

  // Pages
  $("pages").innerHTML = d.pages.length
    ? d.pages
        .map(
          (p) =>
            `<tr><td><span class="path">${esc(pageName(p.path))} <span class="sub" style="display:inline">${esc(p.path)}</span></span><span class="sub">${esc(L.pageSub(p))}</span></td><td class="n">${fmt(p.views)}</td><td class="n">${dur(p.avgMs)}</td><td class="n">${p.avgScroll == null ? "—" : Math.round(p.avgScroll) + "%"}</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="4" class="sub">${esc(L.noData)}</td></tr>`;

  // Countries
  const cMax = Math.max(0, ...d.countries.map((c) => c.n));
  $("countries").innerHTML = d.countries.length
    ? d.countries.map((c) => row(esc(countryName(c.key)), "", fmt(c.n), c.n, cMax)).join("")
    : `<p class="note">${esc(L.noData)}</p>`;
  $("cities").innerHTML = d.cities.length
    ? `${esc(L.topCities)}: ${d.cities
        .slice(0, 6)
        .map((c) => `${esc(c.key)} (${fmt(c.n)})`)
        .join(" · ")}`
    : "";

  renderSections();

  // Clicks
  $("clickMeta").textContent = L.clickMeta(fmt(k.clicks));
  $("clickList").innerHTML = d.clicks.length
    ? d.clicks
        .slice(0, 12)
        .map(
          (c) =>
            `<tr><td><span class="path">${esc(c.target)}</span><span class="sub">${esc(L.kinds[c.kind] || c.kind)} · ${c.pages.map((p) => esc(pageName(p))).join(", ")}</span></td><td class="n">${fmt(c.n)}</td></tr>`,
        )
        .join("")
    : `<tr><td colspan="2" class="sub">${esc(L.noData)}</td></tr>`;

  // Journeys
  const jMax = Math.max(0, ...d.journeys.map((j) => j.n));
  $("journeys").innerHTML = d.journeys.length
    ? d.journeys
        .slice(0, 6)
        .map((j) =>
          row(
            j.key
              .split(" → ")
              .map((p) => esc(pageName(p)))
              .join(" → "),
            "",
            fmt(j.n),
            j.n,
            jMax,
          ),
        )
        .join("")
    : `<p class="note">${esc(L.noData)}</p>`;

  // UTM
  const uMax = Math.max(0, ...d.utm.map((u) => u.n));
  $("utm").innerHTML = d.utm.length
    ? d.utm.map((u) => row(esc(u.key), "", fmt(u.n), u.n, uMax)).join("")
    : `<p class="note">${esc(L.noCampaigns)}</p>`;

  drawHeat(d.heat);

  // Audience
  split("langSplit", "langLg", d.lang, (key) => key.toUpperCase());
  const thMax = Math.max(0, ...d.theme.map((x) => x.share));
  $("themeRows").innerHTML = d.theme
    .map((x) => row(esc((themes[x.key] && themes[x.key].label) || x.key), "", pct(x.share), x.share, thMax))
    .join("");
  split("modeSplit", "modeLg", d.mode, (key) => L.modeNames[key] || key);
  const mini = (list) =>
    list.length
      ? list
          .slice(0, 5)
          .map((x) => `<div><span>${esc(x.key)}</span><span>${pct(x.share)}</span></div>`)
          .join("")
      : `<div><span>—</span></div>`;
  $("browsers").innerHTML = mini(d.browsers);
  $("systems").innerHTML = mini(d.os);

  renderVitals();
}

// A two-or-three-part proportion bar with a legend; segments get a 2px gap.
function split(barId, lgId, list, name) {
  const shades = ["var(--fg)", "var(--accent)", "var(--muted)", "var(--line)"];
  const items = list.slice(0, 3);
  const rest = list.slice(3).reduce((a, b) => a + b.share, 0);
  if (rest > 0) items.push({ key: "__other", share: rest });
  $(barId).innerHTML = items
    .map((x, i) => `<i style="flex:${x.share} 1 0;background:${shades[i]}"></i>`)
    .join("");
  $(lgId).innerHTML = items.length
    ? items
        .map(
          (x, i) =>
            `<span><em style="background:${shades[i]}"></em>${esc(x.key === "__other" ? t().other : name(x.key))} ${pct(x.share)}</span>`,
        )
        .join("")
    : `<span>${esc(t().noData)}</span>`;
}

function renderSections() {
  const L = t();
  const d = st.data;
  const available = PAGES.filter((p) => d.sections[p]);
  if (!available.includes(st.secPage) && available.length) st.secPage = available[0];
  $("secPage").innerHTML = PAGES.map(
    (p) =>
      `<button type="button" data-p="${p}" class="${p === st.secPage ? "active" : ""}" aria-pressed="${p === st.secPage}">${esc(pageName(p))}</button>`,
  ).join("");
  $("secPage")
    .querySelectorAll("button")
    .forEach((b) =>
      b.addEventListener("click", () => {
        st.secPage = b.dataset.p;
        renderSections();
      }),
    );
  const s = d.sections[st.secPage];
  if (!s || !s.items.length) {
    $("sections").innerHTML = `<p class="note">${esc(L.noSections)}</p>`;
    return;
  }
  const items = [...s.items].sort((a, b) => {
    const ia = SECTION_ORDER.indexOf(a.key);
    const ib = SECTION_ORDER.indexOf(b.key);
    return (ia < 0 ? 999 : ia) - (ib < 0 ? 999 : ib);
  });
  const max = Math.max(...items.map((i) => i.avgMs));
  const longest = items.reduce((a, b) => (b.avgMs > a.avgMs ? b : a));
  $("sections").innerHTML = items
    .map((i) =>
      row(esc(sectionName(i.key)), esc(L.reached(pct(i.reach))), dur(i.avgMs), i.avgMs, max, i === longest),
    )
    .join("");
}

// Visits per day with the previous period dashed behind it. Crosshair and
// tooltip on hover; days still in the future are left off the line.
function drawChart(series) {
  const el = $("chart");
  const W = el.clientWidth;
  const H = el.clientHeight;
  const pl = 34;
  const pb = 24;
  const pt = 8;
  const w = W - pl;
  const h = H - pb - pt;
  const n = series.length;
  const top = Math.max(4, ...series.map((p) => Math.max(p.v || 0, p.p || 0)));
  const max = top <= 10 ? Math.ceil(top / 2) * 2 : Math.ceil(top / 10) * 10;
  const x = (i) => pl + (n === 1 ? w / 2 : (i / (n - 1)) * w);
  const y = (v) => pt + h - (v / max) * h;
  const cur = series.map((p, i) => [i, p.v]).filter(([, v]) => v != null);
  const pts = (a) => a.map(([i, v]) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  let g = "";
  for (let k = 0; k <= 4; k++) {
    const v = (max * k) / 4;
    g += `<line class="gl" x1="${pl}" x2="${W}" y1="${y(v)}" y2="${y(v)}" ${k ? 'stroke-dasharray="2 4"' : ""}></line><text x="0" y="${y(v) + 3}">${Number.isInteger(v) ? v : v.toFixed(1)}</text>`;
  }
  const step = Math.max(1, Math.round(n / (W < 500 ? 4 : 7)));
  series.forEach((p, i) => {
    if (i % step === 0) {
      const [, m, dd] = p.day.split("-");
      g += `<text x="${x(i)}" y="${H - 4}" text-anchor="middle">${+dd}.${+m}</text>`;
    }
  });
  const prev = series.map((p, i) => [i, p.p]);
  const area = cur.length
    ? `<polygon class="ar" points="${x(cur[0][0])},${y(0)} ${pts(cur)} ${x(cur[cur.length - 1][0])},${y(0)}"></polygon>`
    : "";
  // A single day (Monday, "this week") has no line to draw, so mark it.
  const lone =
    cur.length === 1
      ? `<circle r="4" cx="${x(cur[0][0])}" cy="${y(cur[0][1])}" style="fill:var(--fg)"></circle>`
      : "";
  el.querySelector("svg")?.remove();
  el.insertAdjacentHTML(
    "afterbegin",
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t().traffic)}">${g}${area}<polyline class="ln2" points="${pts(prev)}"></polyline><polyline class="ln" points="${pts(cur)}"></polyline>${lone}<line id="cx" class="gl" y1="${pt}" y2="${pt + h}" style="opacity:0;stroke:var(--fg)"></line><circle id="cd" r="4" style="fill:var(--bg);stroke:var(--fg);stroke-width:2;opacity:0"></circle></svg>`,
  );
  const svg = el.querySelector("svg");
  const tip = $("tip");
  const move = (clientX) => {
    const bx = svg.getBoundingClientRect();
    const mx = ((clientX - bx.left) * W) / bx.width;
    const i = Math.max(0, Math.min(n - 1, Math.round(((mx - pl) / w) * (n - 1))));
    const p = series[i];
    const cx = svg.querySelector("#cx");
    cx.setAttribute("x1", x(i));
    cx.setAttribute("x2", x(i));
    cx.style.opacity = 0.5;
    const cd = svg.querySelector("#cd");
    cd.setAttribute("cx", x(i));
    cd.setAttribute("cy", y(p.v ?? p.p));
    cd.style.opacity = p.v == null ? 0 : 1;
    const date = new Date(p.day + "T12:00:00").toLocaleDateString(locale(), {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    tip.style.left = Math.min(Math.max((x(i) / W) * 100, 12), 88) + "%";
    tip.style.top = y(Math.max(p.v ?? 0, p.p)) + "px";
    tip.style.opacity = 1;
    tip.innerHTML = `${esc(date)} · <b>${p.v == null ? "—" : p.v}</b> ${esc(t().visits.toLowerCase())} · ${esc(t().prevPeriod.toLowerCase())} ${p.p}`;
  };
  svg.addEventListener("mousemove", (e) => move(e.clientX));
  svg.addEventListener("touchstart", (e) => move(e.touches[0].clientX), { passive: true });
  svg.addEventListener("mouseleave", () => {
    tip.style.opacity = 0;
    svg.querySelector("#cx").style.opacity = 0;
    svg.querySelector("#cd").style.opacity = 0;
  });
}

function drawHeat(heat) {
  const L = t();
  const max = Math.max(0, ...heat.flat());
  let html = `<div class="heat-grid"><span></span>`;
  for (let hr = 0; hr < 24; hr++) html += `<span class="hx">${hr % 6 === 0 ? String(hr).padStart(2, "0") : ""}</span>`;
  heat.forEach((rowv, di) => {
    html += `<span class="hl">${esc(L.days[di])}</span>`;
    rowv.forEach((v, hr) => {
      const o = max ? 0.15 + 0.85 * (v / max) : 0;
      html += `<span class="c${v ? "" : " z"}" data-d="${di}" data-h="${hr}" data-v="${v}" style="${v ? `opacity:${o.toFixed(2)}` : ""}"></span>`;
    });
  });
  html += `</div>`;
  const wrap = $("heat");
  const tip = $("heatTip");
  wrap.innerHTML = html;
  wrap.appendChild(tip);
  wrap.onmousemove = (e) => {
    const c = e.target.closest(".c");
    if (!c) return (tip.style.opacity = 0);
    const r = c.getBoundingClientRect();
    const b = wrap.getBoundingClientRect();
    tip.style.left = Math.min(Math.max(r.left - b.left + r.width / 2, 70), b.width - 70) + "px";
    tip.style.top = r.top - b.top + "px";
    tip.style.opacity = 1;
    tip.innerHTML = `${esc(L.days[c.dataset.d])} ${String(c.dataset.h).padStart(2, "0")}:00 · <b>${c.dataset.v}</b> ${esc(L.visits.toLowerCase())}`;
  };
  wrap.onmouseleave = () => (tip.style.opacity = 0);
}

function renderVitals() {
  const L = t();
  const v = st.data.vitals;
  $("score").textContent = st.data.healthScore == null ? "—" : st.data.healthScore;
  const cell = (label, m, f) =>
    `<div class="vital"><span class="lbl">${label}</span><span class="v">${m.p75 == null ? "—" : f(m.p75)}</span><span class="delta">${m.rating ? esc(L[m.rating]) : esc(L.noData)}${m.n ? ` · ${esc(L.samples(m.n))}` : ""}</span></div>`;
  $("vitals").innerHTML =
    cell("LCP", v.lcp, (x) => (x / 1000).toFixed(1) + "s") +
    cell("INP", v.inp, (x) => Math.round(x) + "ms") +
    cell("CLS", v.cls, (x) => x.toFixed(2));
}

// ── Health checklist from the site's own HTML ─────────────────────────────
async function runChecks() {
  const docs = {};
  await Promise.all(
    PAGES.map(async (p) => {
      try {
        const r = await fetch(PAGE_FILES[p], { cache: "no-store" });
        docs[p] = new DOMParser().parseFromString(await r.text(), "text/html");
      } catch {
        /* skip a page that won't load */
      }
    }),
  );
  const exists = async (u) => {
    try {
      const r = await fetch(u, { method: "HEAD", cache: "no-store" });
      return r.ok;
    } catch {
      return false;
    }
  };
  const [sitemap, robots] = await Promise.all([exists("/sitemap.xml"), exists("/robots.txt")]);
  st.checks = { docs, sitemap, robots };
  renderChecks();
}

function renderChecks() {
  const L = t();
  const C = L.checks;
  const { docs, sitemap, robots } = st.checks;
  const list = [];
  const meta = (doc, sel, attr = "content") => (doc.querySelector(sel)?.getAttribute(attr) || "").trim();
  const per = (fn) =>
    Object.entries(docs)
      .map(([p, doc]) => [p, fn(doc)])
      .filter(([, v]) => v);

  // Titles
  const titles = per((doc) => {
    const n = (doc.title || "").trim().length;
    return n > 60 ? n : null;
  });
  list.push(
    titles.length
      ? ["warn", C.title, titles.map(([p, n]) => `${pageName(p)}: ${C.titleLen(n)}`).join(" · ")]
      : ["ok", C.title, Object.values(docs).map((d) => `«${d.title.trim()}»`).join(" · ")],
  );
  // Descriptions
  const missing = per((doc) => !meta(doc, 'meta[name="description"]'));
  const badLen = per((doc) => {
    const n = meta(doc, 'meta[name="description"]').length;
    return n && (n < 70 || n > 160) ? n : null;
  });
  list.push(
    missing.length
      ? ["bad", C.desc, `${missing.map(([p]) => pageName(p)).join(", ")}: ${C.descMissing}`]
      : badLen.length
        ? ["warn", C.desc, badLen.map(([p, n]) => `${pageName(p)}: ${C.descLen(n)}`).join(" · ")]
        : ["ok", C.desc, Object.keys(docs).map(pageName).join(", ")],
  );
  // Open Graph image
  const noOg = per((doc) => !meta(doc, 'meta[property="og:image"]'));
  list.push(
    noOg.length
      ? ["bad", C.og, `${noOg.map(([p]) => pageName(p)).join(", ")}: ${C.ogMissing}`]
      : ["ok", C.og, Object.keys(docs).map(pageName).join(", ")],
  );
  // Canonical
  const noCanon = per((doc) => !meta(doc, 'link[rel="canonical"]', "href"));
  list.push(
    noCanon.length
      ? ["warn", C.canonical, `${noCanon.map(([p]) => pageName(p)).join(", ")}: ${C.canonicalMissing}`]
      : ["ok", C.canonical, Object.keys(docs).map(pageName).join(", ")],
  );
  // lang
  const noLang = per((doc) => !doc.documentElement.getAttribute("lang"));
  list.push(
    noLang.length
      ? ["warn", C.lang, noLang.map(([p]) => pageName(p)).join(", ")]
      : ["ok", C.lang, `lang="${docs["/"]?.documentElement.getAttribute("lang") || ""}"`],
  );
  // Alt text
  const noAlt = Object.values(docs).reduce(
    (n, doc) => n + [...doc.querySelectorAll("img")].filter((i) => !i.hasAttribute("alt")).length,
    0,
  );
  list.push(noAlt ? ["warn", C.alt, C.altMissing(noAlt)] : ["ok", C.alt, C.altOk]);
  list.push(sitemap ? ["ok", C.sitemap, C.found] : ["warn", C.sitemap, C.sitemapMissing]);
  list.push(robots ? ["ok", C.robots, C.found] : ["warn", C.robots, C.robotsMissing]);
  list.push(location.protocol === "https:" ? ["ok", C.https, C.httpsOk] : ["warn", C.https, location.protocol]);

  $("checks").innerHTML = list
    .map(
      ([s, title, sub]) =>
        `<div class="check"><span class="dot ${s}"></span><div>${esc(title)}<span class="sub">${esc(sub)}</span></div><span class="st">${esc(L.st[s])}</span></div>`,
    )
    .join("");
  const ok = list.filter((c) => c[0] === "ok").length;
  $("checkmeta").textContent = L.checkMeta(ok, list.length - ok);

  // Search preview for the home page.
  const home = docs["/"];
  if (home) {
    const desc = meta(home, 'meta[name="description"]');
    $("serp").innerHTML = `<div class="u">saleemtoure.com</div><div class="t">${esc(home.title.trim())}</div><div class="d">${esc(desc || L.noDesc)}</div>`;
  }
}

let rz;
addEventListener("resize", () => {
  clearTimeout(rz);
  rz = setTimeout(() => st.data && drawChart(st.data.series), 120);
});
// Keep the live count and today's numbers fresh while the tab is open.
setInterval(() => {
  if (st.data && document.visibilityState === "visible") load();
}, 60000);

applyTheme();
applyLang();
syncRange();
load();
