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
