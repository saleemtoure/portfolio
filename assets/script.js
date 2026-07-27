// Every theme carries a full palette in both modes. The Broadcast look needs
// four tokens beyond the original six:
//
//   ghost      the giant watermark numerals — barely above the background,
//              decorative only, never used for text
//   dim        the small uppercase chrome (nav, status bar, kickers)
//   warm       body copy on the project panels, a touch softer than fg
//   onAccent   text sitting *on* an accent-filled panel. Deliberately not
//              var(--bg): ShowTime dark would put near-black on deep red.
//   accentText the accent used as text. Identical to accent wherever that
//              already clears 4.5:1, lightened/darkened where it does not
//              (MSS light, Medina light, ShowTime dark).
//
// Every text/surface pair here is verified against WCAG AA — see the contrast
// sweep in the verification notes. Four `muted` values were also nudged
// because the originals failed (Medina light 4.0:1, MSS dark 3.5:1,
// IR light 3.5:1, ShowTime light 4.3:1).
const themes = {
  mss: {
    label: "MSS",
    a: "#05a69b",
    b: "#343434",
    light: {
      bg: "#f5f5f5",
      fg: "#343434",
      muted: "#6b6b6b",
      accent: "#05a69b",
      accentText: "#0a7068",
      onAccent: "#062724",
      ghost: "#eaeaea",
      dim: "#5f5f5f",
      warm: "#454545",
      line: "rgba(52,52,52,0.2)",
      stripe: "rgba(52,52,52,0.05)",
    },
    dark: {
      bg: "#1f1f1f",
      fg: "#f0f0f0",
      muted: "#9a9a9a",
      accent: "#05a69b",
      accentText: "#0cc4b6",
      onAccent: "#062724",
      ghost: "#2a2a2a",
      dim: "#9a9a9a",
      warm: "#d8d8d8",
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
      muted: "#5b7099",
      accent: "#0055c6",
      accentText: "#0055c6",
      onAccent: "#ffffff",
      ghost: "#eef3fb",
      dim: "#5b7099",
      warm: "#0d3f8f",
      line: "rgba(0,85,198,0.22)",
      stripe: "rgba(0,85,198,0.05)",
    },
    dark: {
      bg: "#0055c6",
      fg: "#ffffff",
      muted: "#c6d6f0",
      accent: "#ffffff",
      accentText: "#ffffff",
      onAccent: "#00337a",
      ghost: "#0b60d0",
      dim: "#c6d6f0",
      warm: "#e8f0fc",
      line: "rgba(255,255,255,0.3)",
      stripe: "rgba(255,255,255,0.08)",
    },
  },
  medina: {
    label: "Medina",
    labelEn: "Madinah",
    a: "#2d5745",
    b: "#b07d3b",
    light: {
      bg: "#f4ede2",
      fg: "#2d5745",
      muted: "#6b6656",
      accent: "#b07d3b",
      accentText: "#8a5f24",
      onAccent: "#2b1e0a",
      ghost: "#eae1d2",
      dim: "#6b6656",
      warm: "#3d4a3f",
      line: "rgba(45,87,69,0.22)",
      stripe: "rgba(45,87,69,0.06)",
    },
    dark: {
      bg: "#1e3a30",
      fg: "#ede4d2",
      muted: "#a8b1a3",
      accent: "#cf9a55",
      accentText: "#cf9a55",
      onAccent: "#1b2a22",
      ghost: "#254539",
      dim: "#9aa89c",
      warm: "#dcd2be",
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
      muted: "#6d5754",
      accent: "#8e0100",
      accentText: "#8e0100",
      onAccent: "#fdf3f0",
      ghost: "#efe6e2",
      dim: "#6d5754",
      warm: "#2e2422",
      line: "rgba(142,1,0,0.22)",
      stripe: "rgba(142,1,0,0.06)",
    },
    dark: {
      bg: "#1a0707",
      fg: "#f0e6e3",
      muted: "#b59791",
      accent: "#8e0100",
      accentText: "#f4695e",
      onAccent: "#fdf3f0",
      ghost: "#2a0d0d",
      dim: "#b59791",
      warm: "#e2d2ce",
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
    lede: '<span class="kw" tabindex="0" data-tip="Jeg elsker å løse problemer">Solver</span> og <span class="kw" tabindex="0" data-tip="Jeg elsker å bygge mennesker, relasjoner og prosjekter">bygger</span> — utvikler, bistandsarbeider, prosjektleder, digital innholdsskaper, og alt midt imellom.',
    verseEn:
      "Han sa: «Nei, sannelig min Herre er med meg — Han skal veilede meg.»",
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
    navFounder: "Gründer",
    navEducation: "Utdanning",
    navShowtime: "ShowTime",
    navToggle: "Meny",
    navAria: "Hovedmeny",
    linkLinkedin: "LinkedIn",
    linkGithub: "GitHub",
    linkCv: "Last ned CV",
    sectionProjects: "Prosjekter",
    sectionProjectsLede:
      "Et utvalg av ting jeg har bygd, eller jobber med akkurat nå.",
    projectComingSoon: "Kommer snart",
    projectComingSoonBody:
      "Jeg legger ut prosjekter etter hvert som de er klare. Sjekk innom igjen, eller ta kontakt for å høre hva jeg jobber med.",
    projectView: "Se det live her",
    projectRead: "Les artikkelen",
    projectSoon: "Kommer snart",
    projectsMore: "Klikk for å se flere",
    projectsLess: "Vis færre",
    projectsSeeAll: "Se prosjekter på LinkedIn",
    projWip: "Under arbeid",
    projStarred: "Utvalgt prosjekt",
    projSweetsTag: "Nettbutikk",
    projSweetsBody:
      "En komplett ende-til-ende nettbutikk i React, med betaling og frakt via Vipps, Posten og Mollie APIer. Ikke-tekniske brukere styrer hele driften fra et fullverdig admin-dashbord, med automatisk lagersporing og et innebygd bookingsystem.",
    projSweetsPost: "LinkedIn-innlegg",
    projMajmioTag: "Plattform",
    projMajmioBody:
      "Majmio samler medlemshåndtering og styrevalg for organisasjon på ett sted — til lav pris, uten å plage deg med funksjoner du ikke trenger.",
    projMajmioLinkedin: "LinkedIn",
    projTalabTag: "Plattform",
    projTalabBody:
      "En enkel oversikt over imamer, khatiber, lærere og foredragsholdere som din moské, organisasjon eller event kan nytte seg av.",
    projTaarufTag: "Plattform",
    projTaarufBody:
      "Taaruf er en plattform laget for å hjelpe muslimer å ha mer meningsfulle og strukturerte samtaler før ekteskapet. I stedet for å lene seg på spredte råd på nettet, guider Taaruf to personer gjennom kuraterte spørsmål om tro, familie, økonomi, kommunikasjon, livsstil og mål. Begge svarer hver for seg, med en betrodd tredjeperson (mahram) inkludert — slik at de forstår hverandre bedre og finner de viktige temaene de bør snakke om før ekteskapet.",
    projTaarufSite: "Landingsside",
    projTaarufApp: "Se det live her",
    readMore: "Les mer",
    readLess: "Les mindre",
    projHicssTag: "Forskning",
    projHicssTitle: "HICSS — Forskningsartikkel",
    projHicssBody:
      "Førsteforfatter på en artikkel sammen med to professorer og en masterstudent om spillbasert læring i høyere utdanning. Fun fact: Jeg er verifisert på ResearchGate.",
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
    sectionFounder: "Gründer",
    sectionFounderLede: "Ting jeg har vært med på å starte opp fra bunnen.",
    founderMajmioTag: "Gründer",
    founderMajmioTitle: "Majmio",
    founderMajmioBody:
      "Majmio samler medlemshåndtering og styrevalg for organisasjon på ett sted — til lav pris, uten å plage deg med funksjoner du ikke trenger.",
    founderMajmioWeb: "Nettside",
    founderMajmioLinkedin: "LinkedIn",
    founderSecretTag: "Medgründer",
    founderSecretTitle: "Hemmelig",
    founderSecretBody:
      "Denne er fortsatt hemmelig — knyttet til det hemmelige prosjektet 😉",
    founderMitekTag: "Medgründer",
    founderMitekTitle: "MiTek — Muslimer i Tek",
    founderMitekBody:
      "MiTek samler norske muslimer innen teknologi for nettverksbygging, faglig utvikling, mentorordninger og samarbeid på tvers av erfaring og bakgrunn.",
    founderMitekLinkedin: "LinkedIn",
    founderMitekLink: "Instagram",
    founderMitekWeb: "Nettside",
    sectionEducation: "Utdanning",
    eduBscTitle: "BSc Informatikk",
    eduBscWhere: "Universitetet i Oslo · Digital økonomi og ledelse",
    eduDialogTitle: "Årsstudium «DialogPilot»",
    eduDialogWhere: "Universitetet i Oslo",
    eduArabicTitle: "Arabisk — nivå 1 (nettbasert)",
    eduArabicWhere: "Islamic University of Madinah",
    eduArabic24Title: "Arabisk — nivå 2–4 (fysisk)",
    eduIslamTitle: "BSc Islam: TBA",
    eduSecurityTitle: "Vekterkurs",
    eduSecurityWhere: "Vectrocon",
    eduVglTitle: "Valle Hovin VGS",
    eduVglWhere: "Studiespesialisering realfag · Toppidrett basketball",
    backToTop: "Til toppen",
    panelNavAria: "Bla mellom seksjoner",
    navHint: "Bruk tastaturpilene",
    prevSection: "Forrige seksjon",
    nextSection: "Neste seksjon",
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
    medinaLede: "TBA.",
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
    mss2024Where: "MSS — Styreåret 2024–2025",
    mss2024Body:
      'Alhamdulillah, en mulighet til å løfte fram og vise arbeidet vårt — vokste online tilstedeværelsen med over 1 000 følgere på ett år. Del av teamet som lanserte <a href="https://www.instagram.com/p/DB_LE-ZtYrS/?img_index=1" target="_blank" rel="noopener">den første skandinaviske koran-konkurransen</a> og <a href="https://www.instagram.com/reel/DG8l2MmttQq/" target="_blank" rel="noopener">«Allah Says»-konseptet</a>.',
    mss2025Title: "Leder",
    mss2025Where: "MSS — Styreåret 2025–2026",
    mss2025Body:
      'Alhamdulillah, fellesskapet ga meg tilliten til å lede denne familien videre, og Allah velsignet meg med et fantastisk team. Et år fylt med rekord mange arrangementer, engasjement og deltakelse på konferanser og i panelsamtaler. Vi arrangerte <a href="https://www.instagram.com/p/DW3rUe-jakc/?hl=nb" target="_blank" rel="noopener">Allah Says 2026</a> — nå også med en kvinnekonkurranse — lanserte «<a href="https://muslimskstudent.no/maktabah/" target="_blank" rel="noopener">al-Maktabah</a>», det første islamske biblioteket for studenter, av studenter, og <a href="https://muslimskstudent.no/mss-waqf" target="_blank" rel="noopener">MSS Waqf</a> for varig påvirkning. Alt mulig — med Allahs hjelp. Skulle gjerne fortsatt, men trer av etter ett år på grunn av studier i utlandet.',

    // ── Broadcast chrome ──
    skipLink: "Hopp til innhold",
    themeAria: "Tema: ",
    nowBroadcasting: "Sender nå",
    endTransmission: "Slutt på sending",
    heroPlace: "Oslo · Nr. 01",
    panelWord: "Panel",
    marquee:
      "Saleem Toure Issifou ✦ utvikler · bistandsarbeider · prosjektleder ✦ solver og bygger ✦ Oslo ✦",
    navChapters: "Kapitler",
    navCv: "CV",

    // ── Project kickers + statuses ──
    projSweetsKicker: "Nettbutikk — live",
    projSweetsStatus: "Levert · i drift",
    projMajmioKicker: "Plattform — live",
    projMajmioStatus: "Medgründer · levert",
    projHicssKicker: "Forskning — publisert",
    projHicssStatus: "Førsteforfatter · verifisert på ResearchGate",
    projTaarufKicker: "Plattform — under arbeid",
    projTaarufStatus: "Under arbeid",
    projSecretKicker: "Hemmelig — under arbeid",
    projSecretStatus: "Kommer snart",
    projTalabKicker: "Plattform — under arbeid",
    projTalabStatus: "Under arbeid",

    // ── Chapters ──
    chaptersLabel: "Kapitler",
    chaptersTitle: "Sidene bak personen.",
    chaptersIntro:
      "Tre egne sider for tre kapitler i livet mitt. Temaene på siden er oppkalt etter dem.",
    chShowtimeYears: "2021 — 2025",
    chShowtimeBlurb:
      "Som 17-åring startet jeg ShowTimeNorge — Skandinavias første basketball-mediehus i sitt slag, og det største på sin tid.",
    chShowtimeCta: "Les historien",
    chMssYears: "2023 — 2026",
    chMssBlurb:
      "Alhamdulillah for Muslimsk Studentsamfunn gjennom studietiden min. Frivillig, så styremedlem, så leder i den største og eldste studentforeningen for norske muslimer.",
    chMssCta: "Se tidslinjen",
    chMedinaYears: "2026 — ?",
    chMedinaBlurb:
      "En ny og annerledes vei. Å forlate tryggheten i søte Norge for å jage noe dypere og utvikle meg mer — in shaa Allah.",
    chMedinaCta: "Se siden",

    // ── Education / contact ──
    eduTitle: "Der jeg har studert.",

    // ── Sub-page chapter navigation ──
    prevChapter: "Forrige kapittel",
    nextChapter: "Neste kapittel",
  },
  en: {
    title: "Saleem Toure Issifou",
    titleShowtime: "ShowTime — Saleem Toure Issifou",
    titleMedina: "Madinah — Saleem Toure Issifou",
    titleMss: "MSS — Saleem Toure Issifou",
    status: "Work in progress...",
    greeting: "Hi — I'm Saleem",
    h1: "Hi, I'm <em>Saleem</em>.",
    lede: '<span class="kw" tabindex="0" data-tip="I love solving problems">Solver</span> and <span class="kw" tabindex="0" data-tip="I love building people, relationships and projects">builder</span> — developer, humanitarian, project leader, digital content creator, and everything in between.',
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
    navFounder: "Founder",
    navEducation: "Education",
    navShowtime: "ShowTime",
    navToggle: "Menu",
    navAria: "Main menu",
    linkLinkedin: "LinkedIn",
    linkGithub: "GitHub",
    linkCv: "Download CV",
    sectionProjects: "Projects",
    sectionProjectsLede:
      "A selection of things I've built, or am working on right now.",
    projectComingSoon: "Coming soon",
    projectComingSoonBody:
      "I'm publishing projects as they're ready. Check back, or reach out to hear what I'm working on.",
    projectView: "See it live here",
    projectRead: "Read the paper",
    projectSoon: "Coming soon",
    projectsMore: "Click to view more",
    projectsLess: "Show fewer",
    projectsSeeAll: "See projects on LinkedIn",
    projWip: "Work in progress",
    projStarred: "Featured project",
    projSweetsTag: "E-commerce",
    projSweetsBody:
      "A full end-to-end e-commerce webshop in React, handling payments and shipping through the Vipps, Posten and Mollie APIs. Non-technical users run the whole operation from a complete admin dashboard, with automatic stock tracking and a built-in booking system.",
    projSweetsPost: "LinkedIn post",
    projMajmioTag: "Platform",
    projMajmioBody:
      "Majmio brings membership management and board elections for an organization together in one place — at a low price, without bothering you with features you don't need.",
    projMajmioLinkedin: "LinkedIn",
    projTalabTag: "Platform",
    projTalabBody:
      "A simple directory of imams, khatibs, teachers and speakers your mosque, organization or event can book.",
    projTaarufTag: "Platform",
    projTaarufBody:
      "Taaruf is a platform designed to help Muslims have more meaningful and structured conversations before marriage. Instead of relying on scattered advice online, Taaruf guides two people through curated questions covering faith, family, finances, communication, lifestyle, and goals. Both participants answer independently with a trusted third person (mahram) included, helping them understand each other better and identify important topics to discuss before marriage.",
    projTaarufSite: "Landing page",
    projTaarufApp: "See it live here",
    readMore: "Read more",
    readLess: "Read less",
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
    sectionFounder: "Founder",
    sectionFounderLede: "Things I've helped start from the ground up.",
    founderMajmioTag: "Founder",
    founderMajmioTitle: "Majmio",
    founderMajmioBody:
      "Majmio brings membership management and board elections for an organization together in one place — at a low price, without bothering you with features you don't need.",
    founderMajmioWeb: "Website",
    founderMajmioLinkedin: "LinkedIn",
    founderSecretTag: "Co-founder",
    founderSecretTitle: "Secret",
    founderSecretBody:
      "This one's still a secret — tied to the secret project 😉",
    founderMitekTag: "Co-founder",
    founderMitekTitle: "MiTek — Muslimer i Tek",
    founderMitekBody:
      "MiTek brings together Norwegian Muslims in tech for networking, professional development, mentorship and collaboration across experience levels and backgrounds.",
    founderMitekLinkedin: "LinkedIn",
    founderMitekLink: "Instagram",
    founderMitekWeb: "Website",
    sectionEducation: "Education",
    eduBscTitle: "BSc Informatics",
    eduBscWhere:
      "University of Oslo · Informatics: Digital Economy & Leadership",
    eduDialogTitle: "One-year Degree/CPD “DialogPilot”",
    eduDialogWhere: "University of Oslo",
    eduArabicTitle: "Arabic — Level 1 (remote)",
    eduArabicWhere: "Islamic University of Madinah",
    eduArabic24Title: "Arabic — Level 2–4 (in person)",
    eduIslamTitle: "BSc Islam: TBA",
    eduSecurityTitle: "Security Guard Certification",
    eduSecurityWhere: "Vectrocon",
    eduVglTitle: "Valle Hovin Upper Secondary",
    eduVglWhere: "Sciences track · Elite sports basketball",
    backToTop: "Back to top",
    panelNavAria: "Move between sections",
    navHint: "Use the arrow keys",
    prevSection: "Previous section",
    nextSection: "Next section",
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
    medinaLede: "TBA.",
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
    mss2024Where: "MSS — Board year 2024–2025",
    mss2024Body:
      'Alhamdulillah, an opportunity to elevate and showcase the work — grew our online presence by more than 1,000 followers in a year. Part of the team that launched <a href="https://www.instagram.com/p/DB_LE-ZtYrS/?img_index=1" target="_blank" rel="noopener">the first Scandinavian Qurʾān competition</a> and the <a href="https://www.instagram.com/reel/DG8l2MmttQq/" target="_blank" rel="noopener">“Allah Says” concept</a>.',
    mss2025Title: "President",
    mss2025Where: "MSS — Board year 2025–2026",
    mss2025Body:
      'Alhamdulillah, the community trusted me to lead this family forward and Allah blessed me with an amazing team. A year filled with a record number of events, engagement, and participation at conferences and in panel discussions. We staged <a href="https://www.instagram.com/p/DW3rUe-jakc/?hl=nb" target="_blank" rel="noopener">Allah Says 2026</a> — now with a women\'s competition too — launched “<a href="https://muslimskstudent.no/maktabah/" target="_blank" rel="noopener">al-Maktabah</a>,” the first ever Islamic library for students by students, and <a href="https://muslimskstudent.no/mss-waqf" target="_blank" rel="noopener">MSS Waqf</a> for lasting impact. All of it possible — with Allah\'s help. Would have loved to continue, but stepping down after a year due to studies abroad.',

    // ── Broadcast chrome ──
    skipLink: "Skip to content",
    themeAria: "Theme: ",
    nowBroadcasting: "Now broadcasting",
    endTransmission: "End of transmission",
    heroPlace: "Oslo · No. 01",
    panelWord: "Panel",
    navChapters: "Chapters",
    navCv: "CV",

    // ── Project kickers + statuses ──
    projSweetsKicker: "E-commerce — live",
    projSweetsStatus: "Shipped · in production",
    projMajmioKicker: "Platform — live",
    projMajmioStatus: "Co-founder · shipped",
    projHicssKicker: "Research — published",
    projHicssStatus: "First author",
    projTaarufKicker: "Platform — in progress",
    projTaarufStatus: "Work in progress",
    projSecretKicker: "Secret — in progress",
    projSecretStatus: "Coming soon",
    projTalabKicker: "Platform — in progress",
    projTalabStatus: "Work in progress",

    // ── Founder ──
    founderIntro:
      "Companies and communities I helped start — and the ones still under wraps.",

    // ── Chapters ──
    chaptersLabel: "Chapters",
    chaptersTitle: "The pages behind the person.",
    chaptersIntro:
      "Three separate pages for three chapters of my life. The site themes are named after them.",
    chShowtimeYears: "2021 — 2025",
    chShowtimeBlurb:
      "At 17 I started ShowTimeNorge — Scandinavia's first basketball media house of its kind, and the biggest of its time.",
    chShowtimeCta: "Read the story",
    chMssYears: "2023 — 2026",
    chMssBlurb:
      "Alhamdulillah for Muslimsk Studentsamfunn throughout my years as a student. Volunteer, then board member, then president of the largest and oldest student society for Norwegian Muslims.",
    chMssCta: "Read the timeline",
    chMedinaYears: "2026 — ?",
    chMedinaBlurb:
      "A new and different path. Leaving the safety of sweet Norway to chase something deeper and grow further — in shaa Allah.",
    chMedinaCta: "Read the page",

    // ── Education / contact ──
    eduTitle: "Where I've been studying.",

    // ── Sub-page chapter navigation ──
    prevChapter: "Previous chapter",
    nextChapter: "Next chapter",
  },
};

const lockedTheme = document.body.dataset.lockedTheme || null;

const DEFAULTS = { theme: "medina", mode: "light", lang: "no" };

// Anything restored from localStorage is checked against the keys that actually
// exist before it is used. A stale value — a renamed theme, a hand-edited
// entry — would otherwise reach themes[undefined][mode] or i18n[undefined] and
// throw, taking the whole page down with it.
function restore(key, valid, fallback) {
  const stored = readStore(key);
  return valid.includes(stored) ? stored : fallback;
}

// Storage can be unavailable entirely (Safari private mode, blocked cookies),
// in which case reads and writes both throw. Preferences simply stop
// persisting; nothing else should break.
function readStore(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function persist(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* preferences just won't survive the session */
  }
}

let state = {
  theme: restore("portfolio-theme", Object.keys(themes), DEFAULTS.theme),
  mode: restore("portfolio-mode", ["light", "dark"], DEFAULTS.mode),
  lang: restore("portfolio-lang", Object.keys(i18n), DEFAULTS.lang),
};
if (lockedTheme && themes[lockedTheme]) state.theme = lockedTheme;

function applyTheme() {
  const t = themes[state.theme][state.mode];
  const r = document.documentElement.style;
  r.setProperty("--bg", t.bg);
  r.setProperty("--fg", t.fg);
  r.setProperty("--muted", t.muted);
  r.setProperty("--accent", t.accent);
  r.setProperty("--accent-text", t.accentText);
  r.setProperty("--on-accent", t.onAccent);
  r.setProperty("--ghost", t.ghost);
  r.setProperty("--dim", t.dim);
  r.setProperty("--warm", t.warm);
  r.setProperty("--line", t.line);
  r.setProperty("--stripe", t.stripe);
  document.documentElement.dataset.mode = state.mode;
  document.documentElement.dataset.theme = state.theme;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", t.bg);
  document.querySelectorAll(".swatch").forEach((s) => {
    s.classList.toggle("active", s.dataset.theme === state.theme);
  });
  document.querySelectorAll(".mode-seg button[data-mode]").forEach((b) => {
    const on = b.dataset.mode === state.mode;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  if (!lockedTheme) persist("portfolio-theme", state.theme);
  persist("portfolio-mode", state.mode);
  updateStatusTheme();
}

// The Medina theme is "Medina" in Norwegian and "Madinah" in English, so the
// swatch label and its aria-label are both re-rendered on every language change
// rather than baked in at build time.
function themeLabel(key, lang) {
  const t = themes[key];
  return lang === "en" && t.labelEn ? t.labelEn : t.label;
}

function updateSwatchLabels() {
  const dict = i18n[state.lang];
  document.querySelectorAll(".swatch").forEach((btn) => {
    const key = btn.dataset.theme;
    const label = themeLabel(key, state.lang);
    const text = btn.querySelector(".swatch-label");
    if (text) text.textContent = label;
    btn.setAttribute("aria-label", dict.themeAria + label);
    btn.setAttribute(
      "aria-pressed",
      btn.dataset.theme === state.theme ? "true" : "false",
    );
  });
}

function buildSwatches() {
  const wrap = document.getElementById("swatches");
  if (!wrap) return;
  Object.entries(themes).forEach(([key, t]) => {
    const btn = document.createElement("button");
    btn.className = "swatch";
    btn.dataset.theme = key;
    btn.type = "button";
    btn.innerHTML = `
      <span class="swatch-colors" aria-hidden="true">
        <span class="a" style="background:${t.a}"></span>
        <span class="b" style="background:${t.b}"></span>
      </span>
      <span class="swatch-label"></span>
    `;
    if (lockedTheme && key !== lockedTheme) {
      btn.disabled = true;
    } else {
      btn.addEventListener("click", () => {
        state.theme = key;
        applyTheme();
        updateSwatchLabels();
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
    const on = b.dataset.lang === state.lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  updateSwatchLabels();
  updateStatusTheme();
  refreshRail();
  persist("portfolio-lang", state.lang);
  // Translated copy has a different length, so re-check what needs clamping.
  updateClamps();
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

// `hidden` is display:none in CSS, not opacity — a panel that is invisible but
// still focusable would leave a dozen buttons stranded in the tab order.
function setOpen(open, moveFocus) {
  if (!controls || !controlsToggle) return;
  controls.classList.toggle("hidden", !open);
  controls.setAttribute("aria-hidden", open ? "false" : "true");
  controlsToggle.classList.toggle("visible", !open);
  controlsToggle.setAttribute("aria-expanded", open ? "true" : "false");
  if (moveFocus) {
    if (open) {
      const first = controls.querySelector("button:not([disabled])");
      if (first) first.focus();
    } else {
      controlsToggle.focus();
    }
  }
  persist("portfolio-controls-open", open ? "1" : "0");
}

if (controlsClose)
  controlsClose.addEventListener("click", () => setOpen(false, true));
if (controlsToggle)
  controlsToggle.addEventListener("click", () => setOpen(true, true));

// Esc closes the theme panel, matching the behaviour every other dismissible
// surface on the site already has.
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape" || !controls) return;
  if (controls.classList.contains("hidden")) return;
  if (!controls.contains(document.activeElement)) return;
  setOpen(false, true);
});

// Starts collapsed. The markup ships in the collapsed state too, so there is
// no flash of an open panel before this runs.
const savedOpen = readStore("portfolio-controls-open");
if (controls) setOpen(savedOpen === "1");

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
  const savedPos = readStore("portfolio-controls-pos");
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
    persist(
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
  // While the CV is "coming soon" the button carries `disabled`; keep the
  // modal shut regardless of how the click arrived.
  const openCv = () => {
    if (cvButton.disabled || cvButton.getAttribute("aria-disabled") === "true")
      return;
    cvModal.classList.add("open");
  };
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

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }),
  );
}

// ── Broadcast rail ────────────────────────────────────────────────────────
//
// Above 1024px the panels sit side by side inside a sticky viewport and
// vertical scroll is mapped onto a horizontal translate. Below that the same
// markup is a plain vertical stack — no transform is ever applied, so touch
// scrolling stays native and the in-page anchors work on their own.
const rail = document.getElementById("rail");
const track = document.getElementById("track");

// Assigned by the rail block below; called after a language switch so the
// "Panel 03 / 12" readout picks up the new wording.
let refreshRail = () => {};
// Also assigned by the rail block, and read by the section pager so the same
// two arrow buttons drive the rail on the index and plain scrolling elsewhere.
let railGo = null;
let railState = null;

function updateStatusTheme() {
  const el = document.getElementById("statusTheme");
  if (!el) return;
  const dict = i18n[state.lang];
  el.textContent =
    themeLabel(state.theme, state.lang) +
    " · " +
    (state.mode === "light" ? dict.light : dict.dark);
}

if (rail && track) {
  const panels = Array.from(rail.querySelectorAll(".panel"));
  const navLinks = Array.from(document.querySelectorAll(".nav a[data-nav]"));
  const statusPanel = document.getElementById("statusPanel");
  const statusBar = document.getElementById("statusBar");
  const railMode = window.matchMedia("(min-width: 1024px)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pad = (n) => String(n).padStart(2, "0");

  let target = 0;
  let current = 0;
  let index = -1;
  let raf = null;
  // Cached in layout(). Reading it inside measure() would force a synchronous
  // reflow on every scroll event, while the rAF loop is writing transforms.
  let step = 0;
  // Set for one move when the rail must arrive immediately rather than ease.
  let snap = false;
  // Destination of an in-flight move, so rapid arrow presses accumulate rather
  // than all resolving against the panel we have not finished leaving.
  let pending = null;

  const isRail = () => railMode.matches;

  function setNavActive(i) {
    // A nav entry stays active across the whole run of panels it introduces —
    // "Prosjekter" covers panels 2 through 7, not just panel 2.
    let best = null;
    navLinks.forEach((a) => {
      const n = Number(a.dataset.nav);
      if (n <= i && (best === null || n > Number(best.dataset.nav))) best = a;
    });
    navLinks.forEach((a) => {
      const on = a === best;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  function measure() {
    let progress = 0;
    let idx = 0;

    if (isRail()) {
      const max = track.offsetHeight - window.innerHeight;
      progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      target = progress * (panels.length - 1) * step;
      idx = Math.round(progress * (panels.length - 1));
    } else {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      progress = Math.min(1, Math.max(0, window.scrollY / max));
      let bestDist = Infinity;
      panels.forEach((p, i) => {
        const d = Math.abs(p.getBoundingClientRect().top - 80);
        if (d < bestDist) {
          bestDist = d;
          idx = i;
        }
      });
    }

    // scaleX, not `right`: see .statusbar-track > span in styles.css.
    if (statusBar) statusBar.style.transform = "scaleX(" + progress + ")";
    if (idx === pending) pending = null;
    if (idx !== index) {
      index = idx;
      if (statusPanel)
        statusPanel.textContent =
          i18n[state.lang].panelWord +
          " " +
          pad(index + 1) +
          " / " +
          pad(panels.length);
      setNavActive(index);
    }
  }

  function frame() {
    const delta = target - current;
    current += delta * 0.09;
    if (Math.abs(delta) < 0.4) current = target;
    rail.style.transform = "translateX(" + -current + "px)";
    // The ghost numerals and the hero wordmark lag the rail slightly, which is
    // what gives the panel change its sense of weight.
    const lag = target - current;
    rail.querySelectorAll(".ghost-num").forEach((g) => {
      g.style.transform = "translateX(" + lag * 0.22 + "px)";
    });
    const kinetic = rail.querySelector(".kinetic");
    if (kinetic)
      kinetic.style.transform =
        "skewX(" + Math.max(-6, Math.min(6, lag * -0.02)) + "deg)";
    raf = current === target ? null : requestAnimationFrame(frame);
  }

  function render() {
    if (!isRail()) return;
    // `snap` short-circuits the easing for one move. Without it, the scroll
    // event that follows an instant jump re-enters the lerp and the rail
    // spends ~300ms catching up — long enough that a keyboard user tabbing
    // at speed is always looking at the previous panel.
    if (reduceMotion.matches || snap) {
      snap = false;
      if (raf !== null) {
        cancelAnimationFrame(raf);
        raf = null;
      }
      current = target;
      rail.style.transform = "translateX(" + -current + "px)";
      rail.querySelectorAll(".ghost-num").forEach((g) => {
        g.style.transform = "";
      });
      const kinetic = rail.querySelector(".kinetic");
      if (kinetic) kinetic.style.transform = "";
      return;
    }
    if (raf === null) raf = requestAnimationFrame(frame);
  }

  function layout() {
    if (isRail()) {
      track.style.height = panels.length * 100 + "vh";
      rail.style.setProperty("--panel-count", panels.length);
      step = panels[0].getBoundingClientRect().width;
    } else {
      // Hand every inline style back so the column layout is pure CSS.
      track.style.height = "";
      rail.style.transform = "";
      current = 0;
      target = 0;
      rail.querySelectorAll(".ghost-num").forEach((g) => {
        g.style.transform = "";
      });
      const kinetic = rail.querySelector(".kinetic");
      if (kinetic) kinetic.style.transform = "";
    }
    index = -1;
    measure();
    render();
  }

  // `instant` is used when following focus: a smooth scroll plus the rail's
  // easing means the view arrives long after focus does, so a keyboard user
  // tabbing quickly ends up looking at a panel that no longer holds the focused
  // element. Jumping straight there keeps focus and view in step.
  function scrollToPanel(i, instant) {
    const smooth = !instant && !reduceMotion.matches;
    if (isRail()) {
      const max = track.offsetHeight - window.innerHeight;
      // Set before scrolling: the scroll event this triggers runs render(),
      // which must snap rather than start easing from the old position.
      if (instant) snap = true;
      window.scrollTo({
        top: (i / (panels.length - 1)) * max,
        behavior: smooth ? "smooth" : "instant",
      });
      if (instant) {
        measure();
        render();
      }
    } else {
      panels[i].scrollIntoView({
        behavior: smooth ? "smooth" : "instant",
        block: "start",
      });
    }
  }

  // On the rail, a panel's document position is meaningless (they all sit in
  // one sticky viewport), so anchor jumps have to be translated into a scroll
  // offset. Below 1024px the native anchor is correct and is left alone.
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest(".nav a[data-nav]");
    if (!a || !isRail()) return;
    e.preventDefault();
    scrollToPanel(Number(a.dataset.nav));
  });

  // Keyboard traversal.
  //
  // When focus lands on something it considers off-screen, the browser scrolls
  // the nearest scrollable ancestor to reveal it — and it will happily do that
  // to an overflow:hidden box. So it shifts .viewport sideways, which slides
  // the whole rail out from under the transform and never puts it back:
  // the panels end up permanently out of register and a keyboard user is
  // stranded. We have to let that happen first, then undo it and move the rail
  // properly — hence the rAF, which runs after the browser's own pass.
  const viewport = track.querySelector(".viewport");
  const resetViewport = () => {
    if (!viewport) return;
    if (viewport.scrollLeft !== 0) viewport.scrollLeft = 0;
    if (viewport.scrollTop !== 0) viewport.scrollTop = 0;
  };
  if (viewport)
    viewport.addEventListener("scroll", resetViewport, { passive: true });

  document.addEventListener("focusin", (e) => {
    if (!isRail()) return;
    const panel = e.target.closest && e.target.closest(".panel");
    if (!panel) return;
    const i = panels.indexOf(panel);
    if (i < 0) return;
    // setTimeout rather than requestAnimationFrame: rAF is paused in a
    // backgrounded tab, and this must still run when focus is restored.
    setTimeout(() => {
      resetViewport();
      scrollToPanel(i, true);
    }, 0);
  });

  // Same problem via in-page anchors: on the rail a fragment jump scrolls to a
  // document offset that means nothing, so route them through scrollToPanel.
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || !isRail()) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const panel = document.getElementById(id);
    const i = panel ? panels.indexOf(panel.closest(".panel")) : -1;
    if (i < 0) return;
    e.preventDefault();
    scrollToPanel(i, true);
    // Keep the keyboard contract of a skip link: move focus, not just the view.
    panel.setAttribute("tabindex", "-1");
    panel.focus({ preventScroll: true });
  });

  // Explicit keyboard paging. Vertical scroll keys already work because the
  // track is a tall document, but on a horizontal rail the left/right arrows
  // are what people actually reach for.
  document.addEventListener("keydown", (e) => {
    if (!isRail() || e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target;
    if (
      t &&
      (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
    )
      return;
    // Step from the panel we are heading to, not the one we are leaving:
    // during a smooth scroll `index` still reports the old panel, so three
    // quick presses would otherwise all resolve to the same destination.
    const base = pending === null ? index : pending;
    let next = null;
    if (e.key === "ArrowRight") next = Math.min(panels.length - 1, base + 1);
    else if (e.key === "ArrowLeft") next = Math.max(0, base - 1);
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = panels.length - 1;
    if (next === null || next === base) return;
    e.preventDefault();
    pending = next;
    scrollToPanel(next);
  });

  window.addEventListener(
    "scroll",
    () => {
      measure();
      render();
    },
    { passive: true },
  );
  window.addEventListener("resize", layout);
  railMode.addEventListener("change", layout);
  if (document.fonts && document.fonts.ready)
    document.fonts.ready.then(measure);

  refreshRail = () => {
    index = -1;
    measure();
  };

  railGo = (delta) => {
    const next = Math.max(0, Math.min(panels.length - 1, index + delta));
    if (next !== index) scrollToPanel(next);
  };
  railState = () => ({ i: index, n: panels.length });

  layout();
}

// ── Section pager ─────────────────────────────────────────────────────────
//
// Two arrows that step one section at a time, replacing the old back-to-top
// button: stepping is what people actually want, and the arrows double as the
// cue for which way the content moves. On the index they drive the rail; on a
// chapter page they walk the top-level sections of <main>.
const pagerPrev = document.getElementById("panelPrev");
const pagerNext = document.getElementById("panelNext");
if (pagerPrev && pagerNext) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const steps = () => Array.from(document.querySelectorAll(".ch-main > *"));

  function pagerState() {
    if (railState) return railState();
    const list = steps();
    let i = 0;
    let best = Infinity;
    list.forEach((s, n) => {
      const d = Math.abs(s.getBoundingClientRect().top - 80);
      if (d < best) {
        best = d;
        i = n;
      }
    });
    return { i, n: list.length };
  }

  function pagerGo(delta) {
    if (railGo) return railGo(delta);
    const list = steps();
    const { i, n } = pagerState();
    const t = Math.max(0, Math.min(n - 1, i + delta));
    if (list[t])
      list[t].scrollIntoView({
        behavior: prefersReduced.matches ? "instant" : "smooth",
        block: "start",
      });
  }

  const sync = () => {
    const { i, n } = pagerState();
    pagerPrev.disabled = i <= 0;
    pagerNext.disabled = i >= n - 1;
  };

  pagerPrev.addEventListener("click", () => pagerGo(-1));
  pagerNext.addEventListener("click", () => pagerGo(1));

  // On a phone the fixed controls overlay the content, so fade them out while
  // the page is moving and bring them back once it settles. The class is only
  // acted on below 1024px; on desktop they stay put.
  let idleTimer = null;
  window.addEventListener(
    "scroll",
    () => {
      document.body.classList.add("is-scrolling");
      clearTimeout(idleTimer);
      idleTimer = setTimeout(
        () => document.body.classList.remove("is-scrolling"),
        550,
      );
    },
    { passive: true },
  );
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync);
  // The rail reports its index asynchronously on first layout, so settle once.
  setTimeout(sync, 60);
  sync();

  // Arrow keys page through the chapter sections too, matching the rail.
  if (!railGo) {
    document.addEventListener("keydown", (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (
        t &&
        (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))
      )
        return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        pagerGo(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        pagerGo(-1);
      }
    });
  }
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

// Projects "view more" — reveal the rows hidden behind the gradient
const projectsWrap = document.getElementById("projectsWrap");
const projectsGrid = document.getElementById("projectsGrid");
const projectsMoreBtn = document.getElementById("projectsMoreBtn");
if (projectsWrap && projectsGrid && projectsMoreBtn) {
  const moreLabel = projectsMoreBtn.querySelector("[data-i18n]");
  // Collapsed resting height comes from CSS (max-height: 27rem). JS only sets
  // an inline max-height during the animation so it runs between the real
  // content height and the collapsed height — no snap from a fake large value.
  projectsMoreBtn.addEventListener("click", () => {
    const expanded = projectsWrap.classList.toggle("is-expanded");
    projectsMoreBtn.setAttribute("aria-expanded", expanded ? "true" : "false");
    if (moreLabel) {
      moreLabel.dataset.i18n = expanded ? "projectsLess" : "projectsMore";
      moreLabel.textContent = i18n[state.lang][moreLabel.dataset.i18n];
    }

    if (expanded) {
      // Animate from the collapsed height up to the full content height,
      // then release the cap so the grid can reflow/grow freely.
      projectsGrid.style.maxHeight = projectsGrid.scrollHeight + "px";
      projectsGrid.addEventListener(
        "transitionend",
        function done(e) {
          if (e.propertyName !== "max-height") return;
          if (projectsWrap.classList.contains("is-expanded"))
            projectsGrid.style.maxHeight = "none";
          projectsGrid.removeEventListener("transitionend", done);
        },
        { once: false },
      );
    } else {
      // Pin the current full height, force a reflow, then drop back to the
      // CSS collapsed height so the transition animates down smoothly.
      projectsGrid.style.maxHeight = projectsGrid.scrollHeight + "px";
      void projectsGrid.offsetHeight; // reflow
      projectsGrid.style.maxHeight = "";
    }
  });
}

// "Read more" for long project descriptions. A paragraph marked [data-clamp]
// is only clamped when its text really is longer than CLAMP_LINES lines, so a
// short translation keeps the plain, toggle-free card.
// Matches -webkit-line-clamp on .project-body. Six lines is what a project
// panel can show without the content outgrowing 100vh on the rail.
const CLAMP_LINES = 6;
function updateClamps() {
  document.querySelectorAll("[data-clamp]").forEach((p) => {
    const btn = p.parentElement.querySelector(".read-more");
    if (!btn || p.classList.contains("is-open")) return;
    p.classList.remove("clamped");
    const cs = getComputedStyle(p);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.6;
    const fits = p.scrollHeight <= lh * CLAMP_LINES + 1;
    p.classList.toggle("clamped", !fits);
    btn.hidden = fits;
  });
}

document.querySelectorAll(".read-more").forEach((btn) => {
  btn.addEventListener("click", () => {
    const p = btn.parentElement.querySelector("[data-clamp]");
    if (!p) return;
    const open = p.classList.toggle("is-open");
    p.classList.toggle("clamped", !open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    const label = btn.querySelector("[data-i18n]");
    if (label) {
      label.dataset.i18n = open ? "readLess" : "readMore";
      label.textContent = i18n[state.lang][label.dataset.i18n];
    }
  });
});

let clampTimer;
window.addEventListener("resize", () => {
  clearTimeout(clampTimer);
  clampTimer = setTimeout(updateClamps, 150);
});
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(updateClamps);
}

// Founder cards — show the name only, expand the rest on click
document.querySelectorAll(".founder-card-head").forEach((head) => {
  const card = head.closest(".founder-card");
  head.addEventListener("click", () => {
    const open = card.classList.toggle("is-open");
    head.setAttribute("aria-expanded", open ? "true" : "false");
  });
});

buildSwatches();
applyTheme();
applyLang();
