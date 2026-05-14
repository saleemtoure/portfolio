const themes = {
  mss: {
    label: "MSS",
    a: "#05a69b",
    b: "#343434",
    light: {
      bg: "#f5f5f5",
      fg: "#343434",
      muted: "#7a7a7a",
      accent: "#05a69b",
      line: "rgba(52,52,52,0.2)",
      stripe: "rgba(52,52,52,0.05)",
    },
    dark: {
      bg: "#1f1f1f",
      fg: "#f0f0f0",
      muted: "#7a7a7a",
      accent: "#05a69b",
      line: "rgba(240,240,240,0.18)",
      stripe: "rgba(240,240,240,0.05)",
    },
  },
  ir: {
    label: "IR",
    a: "#0055c6",
    b: "#ffffff",
    light: {
      bg: "#ffffff",
      fg: "#0055c6",
      muted: "#6f86ad",
      accent: "#0055c6",
      line: "rgba(0,85,198,0.22)",
      stripe: "rgba(0,85,198,0.05)",
    },
    dark: {
      bg: "#0055c6",
      fg: "#ffffff",
      muted: "#c6d6f0",
      accent: "#ffffff",
      line: "rgba(255,255,255,0.3)",
      stripe: "rgba(255,255,255,0.08)",
    },
  },
  medina: {
    label: "Medina",
    a: "#2d5745",
    b: "#b07d3b",
    light: {
      bg: "#f4ede2",
      fg: "#2d5745",
      muted: "#7a7565",
      accent: "#b07d3b",
      line: "rgba(45,87,69,0.22)",
      stripe: "rgba(45,87,69,0.06)",
    },
    dark: {
      bg: "#1e3a30",
      fg: "#ede4d2",
      muted: "#a8b1a3",
      accent: "#cf9a55",
      line: "rgba(237,228,210,0.18)",
      stripe: "rgba(237,228,210,0.06)",
    },
  },
  showtime: {
    label: "ShowTime",
    a: "#8e0100",
    b: "#1a1a1a",
    light: {
      bg: "#f7f1ee",
      fg: "#1a1a1a",
      muted: "#7a6360",
      accent: "#8e0100",
      line: "rgba(142,1,0,0.22)",
      stripe: "rgba(142,1,0,0.06)",
    },
    dark: {
      bg: "#1a0707",
      fg: "#f0e6e3",
      muted: "#b59791",
      accent: "#8e0100",
      line: "rgba(240,230,227,0.18)",
      stripe: "rgba(240,230,227,0.06)",
    },
  },
};

const i18n = {
  no: {
    title: "Saleem Toure Issifou",
    titleShowtime: "ShowTime — Saleem Toure Issifou",
    titleMedina: "Medina — Saleem Toure Issifou",
    titleMss: "MSS — Saleem Toure Issifou",
    status: "Under utvikling...",
    greeting: "Hei — jeg er Saleem",
    h1: "Hei, jeg er <em>Saleem</em>.",
    lede: "<strong>Utvikler</strong>, bistandsarbeider, prosjektleder, digital innholdsskaper — og alt imellom.",
    verseEn:
      "Han sa: «Nei, sannelig er min Herre med meg — Han skal lede meg.»",
    verseRef: "Surah Ash-Shu'arā · 26:62",
    navMedina: "Medina",
    navMss: "MSS",
    medinaLocked: "Tema låst til Medina",
    mssLocked: "Tema låst til MSS",
    portraitAlt: "Portrett av Saleem Toure Issifou",
    controlsAria: "Tema og modus",
    themeTitle: "Velg tema",
    modeLabel: "Modus",
    modeAria: "Lys eller mørk",
    light: "Lys",
    dark: "Mørk",
    langLabel: "Språk",
    langAria: "Norsk eller engelsk",
    closeControls: "Lukk panel",
    openControls: "Åpne tema-panel",
    ctaProjects: "Mine prosjekter",
    navHome: "Hjem",
    navProjects: "Prosjekter",
    navAbout: "Om meg",
    navEducation: "Utdanning",
    navShowtime: "ShowTime",
    navToggle: "Meny",
    linkLinkedin: "LinkedIn",
    linkGithub: "GitHub",
    linkCv: "Last ned CV",
    sectionProjects: "Prosjekter",
    sectionProjectsLede:
      "Et utvalg av ting jeg har bygd, eller jobber med akkurat nå.",
    projectComingSoon: "Kommer snart",
    projectComingSoonBody:
      "Jeg legger ut prosjekter etter hvert som de er klare. Sjekk innom igjen, eller ta kontakt for å høre hva jeg jobber med.",
    projectView: "Se prosjekt",
    projectRead: "Les artikkelen",
    projectSoon: "Kommer snart",
    projectsMore: "Klikk for å se flere",
    projectsSeeAll: "Se prosjekter på LinkedIn",
    projWip: "Under arbeid",
    projTalabTag: "Plattform",
    projTalabBody:
      "En enkel oversikt over imamer, khatiber, lærere og foredragsholdere som din moské, organisasjon eller event kan nytte seg av.",
    projTaarufTag: "Plattform",
    projTaarufBody:
      "En spørsmålsplattform for de som leter etter sin andre halvdel — halal, med en mahram som støtter.",
    projHicssTag: "Forskning",
    projHicssTitle: "HICSS — Forskningsartikkel",
    projHicssBody:
      "Førsteforfatter på en artikkel sammen med to professorer og en masterstudent om spillbasert læring i høyere utdanning.  Fun fact: Jeg er verifisert på ResearchGate.",
    projSecretTag: "Hemmelig",
    projSecretTitle: "Hemmelig prosjekt",
    projSecretBody:
      "Kan ikke dele så mye om denne ennå — noe jeg og teamet gleder oss veldig til å vise verden.",
    cvModalTitle: "Hvilken CV vil du ha?",
    cvModalBody: "Velg versjonen som passer best for det du leter etter.",
    cvDevTitle: "Utvikler-CV",
    cvDevSub: "Kode, prosjekter, tech-stack",
    cvGenTitle: "Generell CV",
    cvGenSub: "Erfaring, utdanning, alt sammen",
    sectionAbout: "Om meg",
    sectionAboutBody:
      "Jeg er Saleem — noen kjenner meg som «ShowTime». Jeg er en «solver» og en bygger. Jeg elsker å løse problemer og utfordringer. Jeg elsker å bygge mennesker, relasjoner og prosjekter. Enkelt sagt: jeg får ting gjort.",
    sectionEducation: "Utdanning",
    eduBscTitle: "BSc Informatikk",
    eduBscWhere: "Universitetet i Oslo · Digital økonomi og ledelse",
    eduDialogTitle: "Årsstudium «DialogPilot»",
    eduDialogWhere: "Universitetet i Oslo",
    eduArabicTitle: "Arabisk — nivå 1 (nettbasert)",
    eduArabicWhere: "Islamic University of Madinah",
    eduSecurityTitle: "Vekterkurs",
    eduSecurityWhere: "Vectrocon",
    eduVglTitle: "Valle Hovin VGS",
    eduVglWhere: "Studiespesialisering realfag · Toppidrett basketball",
    backToTop: "Til toppen",
    footerNote:
      "Temaene på siden er dedikert til ulike viktige kapitler i livet mitt. IR-temaet er en hilsen til tiden min som frivillig og ansatt hos Islamic Relief ❤",
    showtimeLocked: "Tema låst til ShowTime",
    showtimeStatus: "ShowTime",
    showtimeH1: "«Yo, er ikke det <em>ShowTime</em>?»",
    showtimeLede:
      "<em>Fun fact:</em> navnet er inspirert av Magic Johnson. Da jeg spilte basket elsket jeg å kaste flashy pasninger som <strong>#BigGuard</strong> i transition — og rope «ShowTime!»",
    showtimeImgAlt: "ShowTime Norge",
    stCtaStory: "Min historie",
    stStoryTitle: "Min ShowTime-historie",
    stPart1Label: "Starten",
    stPart1Body:
      "Som 17-åring startet jeg <strong>ShowTimeNorge</strong> — «STN» — Skandinavias første basketball-mediehus i sitt slag, og det største på sin tid. Målet var enkelt: gjøre basket «kult» i Norge.",
    stPart2Label: "Hustelen",
    stPart2Body:
      "Jeg reiste rundt i landet på egen regning — filmet, fotograferte, designet grafikk, lagde og solgte merch — samtidig som jeg holdt kontakten med colleges og akademier fra Miami til Roma, slik at norske spillere kunne få eksponeringen de trengte for å jage basketdrømmene sine. <strong>Aldri tatt én krone</strong> for noe av det.",
    stPart3Label: "Toppen",
    stPart3Body:
      "Prosjektet viste meg hva som faktisk er mulig med lidenskap og oppfinnsomhet. På toppen, før jeg trakk meg, hadde STN nesten <strong>9 000 følgere</strong> på tvers av plattformer. Det føles nesten som en feberdrøm — å bli stoppet av barn som ville ta bilder, nasjonale mediehus som ringte for å be om støtte, folk som takket meg for å ha endret livet deres med kontrakter, kontakter og alt mulig. <em>Fun fact:</em> Jeg (prøvde) en kort utvidelse til fotball (STF).",
    stPart4Label: "Sluttspillet",
    stPart4Body:
      'Tidlig i 2025 valgte jeg å "pensjonere" meg — det personlige livet og ambisjonene mine begynte å bevege seg vekk fra prosjektet. I dag ser jeg nye liknende prosjekter dukke opp nesten hver dag. Det er godt å se folk hente inspirasjon og lage liknende konsepter, både i Norge og ellers i Skandinavia. Jeg håper de overgår meg.',
    mssImgAlt: "MSS — Muslimsk Studentsamfunn",
    medinaImgAlt: "Medina",
    medinaStatus: "Medina",
    medinaH1: "المدينة<br /><em>Medina</em>.",
    medinaLede: "Annonseres senere.",
    hadithEn:
      "«Sannelig vender troen tilbake til Medina slik en slange vender tilbake til sin hule (i fare).»",
    hadithRef: "Sahīh al-Bukhārī · 1876",
    mssH1: "Muslimsk Studentsamfunn<br /><em>MSS</em>.",
    mssLede:
      "Min tid i den største og eldste studentforeningen for norske muslimer.",
    mssLinkTeam: "Mitt team ❤",
    mssCtaTimeline: "Tidslinje",
    mssJourneyTitle: "Min MSS-reise",
    mss2023Title: "Frivillig",
    mss2023Where: "Muslimsk Studentsamfunn — UiO",
    mss2023Body:
      "Begynte studier ved UiO og ble frivillig i MSS. Hjalp til med å sette opp jumu'ah og bidro på arrangementer: servering, rydding, det som trengtes.",
    mss2024Title: "Styremedlem — Media- og infoansvarlig",
    mss2024Where: "MSS — Styreåret 2024",
    mss2024Body:
      "Alhamdulillah, en mulighet til å løfte fram og vise arbeidet vårt — vokste online tilstedeværelsen med over 1 000 følgere på ett år. Del av teamet som lanserte den første skandinaviske koran-konkurransen og «Allah Says»-konseptet.",
    mss2025Title: "Leder",
    mss2025Where: "MSS — Styreåret 2025",
    mss2025Body:
      "Alhamdulillah, fellesskapet ga meg tilliten til å lede videre. Et år med læring og skaping sammen med et fantastisk team. Vi arrangerte Allah Says 2026 — nå også med en kvinnekonkurranse — lanserte «al-Maktabah», det første islamske biblioteket for studenter, av studenter, og MSS Waqf for varig påvirkning. Skulle gjerne fortsatt, men trer av etter ett år på grunn av studier i utlandet.",
  },
  en: {
    title: "Saleem Toure Issifou",
    titleShowtime: "ShowTime — Saleem Toure Issifou",
    titleMedina: "Madinah — Saleem Toure Issifou",
    titleMss: "MSS — Saleem Toure Issifou",
    status: "Work in progress...",
    greeting: "Hi — I'm Saleem",
    h1: "Hi, I'm <em>Saleem</em>.",
    lede: "<strong>Developer</strong>, humanitarian, project manager, digital content creator — and everything in between.",
    verseEn: "He said, “Nay! Indeed, with me is my Lord; He will guide me.”",
    verseRef: "Surah Ash-Shu'arā · 26:62",
    navMedina: "Madinah",
    navMss: "MSS",
    medinaLocked: "Theme locked to Madinah",
    mssLocked: "Theme locked to MSS",
    portraitAlt: "Portrait of Saleem Toure Issifou",
    controlsAria: "Theme and mode",
    themeTitle: "Choose theme",
    modeLabel: "Mode",
    modeAria: "Light or dark",
    light: "Light",
    dark: "Dark",
    langLabel: "Language",
    langAria: "Norwegian or English",
    closeControls: "Close panel",
    openControls: "Open theme panel",
    ctaProjects: "My projects",
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "About me",
    navEducation: "Education",
    navShowtime: "ShowTime",
    navToggle: "Menu",
    linkLinkedin: "LinkedIn",
    linkGithub: "GitHub",
    linkCv: "Download CV",
    sectionProjects: "Projects",
    sectionProjectsLede:
      "A selection of things I've built, or am working on right now.",
    projectComingSoon: "Coming soon",
    projectComingSoonBody:
      "I'm publishing projects as they're ready. Check back, or reach out to hear what I'm working on.",
    projectView: "View project",
    projectRead: "Read the paper",
    projectSoon: "Coming soon",
    projectsMore: "Click to view more",
    projectsSeeAll: "See projects on LinkedIn",
    projWip: "Work in progress",
    projTalabTag: "Platform",
    projTalabBody:
      "A simple directory of imams, khatibs, teachers and speakers your mosque, organization or event can book.",
    projTaarufTag: "Platform",
    projTaarufBody:
      "A question platform for those finding their other halves — halal, with a mahram supporting.",
    projHicssTag: "Research",
    projHicssTitle: "HICSS — Research paper",
    projHicssBody:
      "First author on a paper with two professors and an MSc student on Game-Based Learning in Higher Education. Fun fact: I'm verified on ResearchGate.",
    projSecretTag: "Secret",
    projSecretTitle: "Secret project",
    projSecretBody:
      "Can't share too much about this one yet — something the team and I are super excited to show the world.",
    cvModalTitle: "Which CV would you like?",
    cvModalBody: "Pick the version that fits what you're looking for.",
    cvDevTitle: "Developer CV",
    cvDevSub: "Code, projects, tech stack",
    cvGenTitle: "General CV",
    cvGenSub: "Experience, education, everything",
    sectionAbout: "About me",
    sectionAboutBody:
      "I'm Saleem — some people know me as “ShowTime”. I'm a “solver” and a builder. I love solving problems and issues. I love building people, relationships and projects. Simply put: I get stuff done.",
    sectionEducation: "Education",
    eduBscTitle: "BSc Informatics",
    eduBscWhere: "University of Oslo · Digital Economy & Leadership",
    eduDialogTitle: "One-year CPD “DialogPilot”",
    eduDialogWhere: "University of Oslo",
    eduArabicTitle: "Arabic — Level 1 (remote)",
    eduArabicWhere: "Islamic University of Madinah",
    eduSecurityTitle: "Security Guard Certification",
    eduSecurityWhere: "Vectrocon",
    eduVglTitle: "Valle Hovin Upper Secondary",
    eduVglWhere: "Sciences track · Elite sports basketball",
    backToTop: "Back to top",
    footerNote:
      "The themes of my personal site are dedicated to different significant arcs in my life. The IR theme is a nod to my time as a volunteer and employee at Islamic Relief ❤",
    showtimeLocked: "Theme locked to ShowTime",
    showtimeStatus: "ShowTime",
    showtimeH1: "“Yo, isn't that <em>ShowTime</em>?”",
    showtimeLede:
      "<em>Fun fact:</em> the name is inspired by Magic Johnson. Back when I played basketball, I loved throwing flashy passes as a <strong>#BigGuard</strong> pushing in transition — and yelling “ShowTime!”",
    showtimeImgAlt: "ShowTime Norge",
    stCtaStory: "My story",
    stStoryTitle: "My ShowTime story",
    stPart1Label: "The start",
    stPart1Body:
      "At 17 I started <strong>ShowTimeNorge</strong> — “STN” — Scandinavia's first basketball media house of its kind, and the biggest of its time. The goal was simple: make basketball “cool” in Norway.",
    stPart2Label: "The hustle",
    stPart2Body:
      "I traveled around the country on my own dime — videography, photography, graphic design, making and selling merch — while staying in touch with colleges and academies from Miami to Rome so Norwegian players could get the exposure they needed to chase their hoop dreams. <strong>Never took a single dime</strong> for any of it.",
    stPart3Label: "The peak",
    stPart3Body:
      "The project showed me what's actually possible with passion and resourcefulness. At its peak, before I stepped away, STN had nearly <strong>9k followers</strong> across platforms. It almost feels like a fever dream — kids stopping me for pictures, national media houses calling to request my support, people thanking me for changing their lives with contracts, contacts and what not. <em>Fun fact:</em> I (tried) a brief expansion into football (STF).",
    stPart4Label: "The exit",
    stPart4Body:
      "Early 2025 I decided to retire — my personal life and aspirations had begun to diverge from the project. Now I see new similar projects pop up almost every day. It's good to see people drawing inspiration and building similar concepts both in Norway and elsewhere in Scandinavia. I hope they surpass me.",
    mssImgAlt: "MSS — Muslim Student Society",
    medinaImgAlt: "Madinah",
    medinaStatus: "Madinah",
    medinaH1: "المدينة<br /><em>Madinah</em>.",
    medinaLede: "To be announced.",
    hadithEn:
      "“Verily, belief returns and goes back to Madinah as a snake returns and goes back to its hole (when in danger).”",
    hadithRef: "Ṣaḥīḥ al-Bukhārī · 1876",
    mssH1:
      'Muslimsk Studentsamfunn<span class="h1-sub">(Muslim Student Society)</span><em>MSS</em>.',
    mssLede:
      "My time in Norway's largest and oldest student society for Muslims.",
    mssLinkTeam: "My team ❤",
    mssCtaTimeline: "Timeline",
    mssJourneyTitle: "My MSS journey",
    mss2023Title: "Volunteer",
    mss2023Where: "Muslimsk Studentsamfunn — UiO",
    mss2023Body:
      "Started my studies at UiO and joined MSS as a volunteer. Helped set up jumu'ah and pitched in at events: serving food, clearing tables, whatever was needed.",
    mss2024Title: "Board member — Head of Media & Marketing",
    mss2024Where: "MSS — Board year 2024",
    mss2024Body:
      "Alhamdulillah, an opportunity to elevate and showcase the work — grew our online presence by more than 1,000 followers in a year. Part of the team that launched the first Scandinavian Qurʾān competition and the “Allah Says” concept.",
    mss2025Title: "President",
    mss2025Where: "MSS — Board year 2025",
    mss2025Body:
      "Alhamdulillah, the community trusted me to lead this family forward. A year of learning and building with an amazing team. We staged Allah Says 2026 — now with a women's competition too — launched “al-Maktabah,” the first ever Islamic library for students by students, and MSS Waqf for lasting impact. Would have loved to continue, but stepping down after a year due to studies abroad.",
  },
};

const lockedTheme = document.body.dataset.lockedTheme || null;

let state = {
  theme: lockedTheme || localStorage.getItem("portfolio-theme") || "mss",
  mode: localStorage.getItem("portfolio-mode") || "light",
  lang: localStorage.getItem("portfolio-lang") || "no",
};
if (lockedTheme) state.theme = lockedTheme;

function applyTheme() {
  const t = themes[state.theme][state.mode];
  const r = document.documentElement.style;
  r.setProperty("--bg", t.bg);
  r.setProperty("--fg", t.fg);
  r.setProperty("--muted", t.muted);
  r.setProperty("--accent", t.accent);
  r.setProperty("--line", t.line);
  r.setProperty("--stripe", t.stripe);
  document.querySelectorAll(".swatch").forEach((s) => {
    s.classList.toggle("active", s.dataset.theme === state.theme);
  });
  document.querySelectorAll(".mode-seg button[data-mode]").forEach((b) => {
    b.classList.toggle("active", b.dataset.mode === state.mode);
  });
  if (!lockedTheme) localStorage.setItem("portfolio-theme", state.theme);
  localStorage.setItem("portfolio-mode", state.mode);
}

function buildSwatches() {
  const wrap = document.getElementById("swatches");
  if (!wrap) return;
  Object.entries(themes).forEach(([key, t]) => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.dataset.theme = key;
    btn.type = "button";
    btn.setAttribute("aria-label", "Tema: " + t.label);
    btn.innerHTML = `
      <span class="swatch-colors">
        <span class="a" style="background:${t.a}"></span>
        <span class="b" style="background:${t.b}"></span>
      </span>
      <span class="swatch-label">${t.label}</span>
    `;
    if (lockedTheme && key !== lockedTheme) {
      btn.disabled = true;
      btn.style.opacity = "0.35";
      btn.style.cursor = "not-allowed";
    } else {
      btn.addEventListener("click", () => {
        state.theme = key;
        applyTheme();
      });
    }
    wrap.appendChild(btn);
  });
}

function applyLang() {
  const dict = i18n[state.lang];
  document.documentElement.lang = state.lang;
  const titleKey = document.body.dataset.titleKey || "title";
  if (dict[titleKey]) document.title = dict[titleKey];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] != null) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (dict[key] != null) el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
  });
  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === state.lang);
  });
  localStorage.setItem("portfolio-lang", state.lang);
}

document.querySelectorAll(".mode-seg button[data-mode]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.mode = btn.dataset.mode;
    applyTheme();
  });
});

document.querySelectorAll(".mode-seg button[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang;
    applyLang();
  });
});

const controls = document.getElementById("controls");
const controlsToggle = document.getElementById("controlsToggle");
const controlsClose = document.getElementById("controlsClose");
const controlsHeader = document.getElementById("controlsHeader");

function setOpen(open) {
  if (!controls || !controlsToggle) return;
  controls.classList.toggle("hidden", !open);
  controlsToggle.classList.toggle("visible", !open);
  localStorage.setItem("portfolio-controls-open", open ? "1" : "0");
}

if (controlsClose)
  controlsClose.addEventListener("click", () => setOpen(false));
if (controlsToggle)
  controlsToggle.addEventListener("click", () => setOpen(true));

const savedOpen = localStorage.getItem("portfolio-controls-open");
if (controls) setOpen(savedOpen === null ? true : savedOpen === "1");

function clampPosition(left, top) {
  const rect = controls.getBoundingClientRect();
  const maxLeft = window.innerWidth - rect.width - 4;
  const maxTop = window.innerHeight - rect.height - 4;
  return {
    left: Math.max(4, Math.min(left, maxLeft)),
    top: Math.max(4, Math.min(top, maxTop)),
  };
}

function applyPosition(left, top) {
  controls.style.left = left + "px";
  controls.style.top = top + "px";
  controls.style.right = "auto";
  controls.style.bottom = "auto";
}

if (controls) {
  const savedPos = localStorage.getItem("portfolio-controls-pos");
  if (savedPos) {
    try {
      const { left, top } = JSON.parse(savedPos);
      requestAnimationFrame(() => {
        const c = clampPosition(left, top);
        applyPosition(c.left, c.top);
      });
    } catch {}
  }

  let drag = null;
  controlsHeader.addEventListener("pointerdown", (e) => {
    if (e.target.closest(".controls-close")) return;
    const rect = controls.getBoundingClientRect();
    drag = {
      dx: e.clientX - rect.left,
      dy: e.clientY - rect.top,
      pointerId: e.pointerId,
    };
    controls.classList.add("dragging");
    controlsHeader.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  controlsHeader.addEventListener("pointermove", (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    const c = clampPosition(e.clientX - drag.dx, e.clientY - drag.dy);
    applyPosition(c.left, c.top);
  });

  function endDrag(e) {
    if (!drag || e.pointerId !== drag.pointerId) return;
    controls.classList.remove("dragging");
    try {
      controlsHeader.releasePointerCapture(drag.pointerId);
    } catch {}
    drag = null;
    const rect = controls.getBoundingClientRect();
    localStorage.setItem(
      "portfolio-controls-pos",
      JSON.stringify({ left: rect.left, top: rect.top }),
    );
  }
  controlsHeader.addEventListener("pointerup", endDrag);
  controlsHeader.addEventListener("pointercancel", endDrag);

  window.addEventListener("resize", () => {
    if (controls.style.left) {
      const rect = controls.getBoundingClientRect();
      const c = clampPosition(rect.left, rect.top);
      applyPosition(c.left, c.top);
    }
  });
}

// CV picker modal
const cvButton = document.getElementById("cvButton");
const cvModal = document.getElementById("cvModal");
const cvModalClose = document.getElementById("cvModalClose");
if (cvButton && cvModal) {
  const openCv = () => cvModal.classList.add("open");
  const closeCv = () => cvModal.classList.remove("open");
  cvButton.addEventListener("click", openCv);
  if (cvModalClose) cvModalClose.addEventListener("click", closeCv);
  cvModal.addEventListener("click", (e) => {
    if (e.target === cvModal) closeCv();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cvModal.classList.contains("open")) closeCv();
  });
}

// Back to top
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  const onScroll = () => {
    backToTop.classList.toggle("visible", window.scrollY > 320);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
}

// Highlight active nav item on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav a[data-target]");
if (sections.length && navLinks.length) {
  const setActive = (id) => {
    navLinks.forEach((a) =>
      a.classList.toggle("active", a.dataset.target === id),
    );
  };
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );
  sections.forEach((s) => observer.observe(s));
}

buildSwatches();
applyTheme();
applyLang();
