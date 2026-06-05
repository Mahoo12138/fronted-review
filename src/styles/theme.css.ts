import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

export const [light, themeVars] = createTheme({
  color: {
    primary: "#007aff",

    text: "#2d3561",
    text2: "#1a202c",
    textDim: "#7b84a8",
    textBright: "#111630",

    bg: "#f4f5f9",
    surface: "#ffffff",
    surface2: "#eef0f7",
    surface3: "#e3e6f0",
    border: "#d0d5e8",

    red: "#e8394a",
    green: "#00b894",
    blue: "#2980d8",
    yellow: "#e67e22",
    violet: "#6254e8",
    orchid: "#c83df5",
    turquoise: "#00b894",
    orange: "#e67e22",

    ink: "#1a1208",
    paper: "#faf6ef",
    amber: "#c8832a",
    amberLight: "#f0c06a",
    amberPale: "#fdf0d5",

    rust: "#a8401a",
    sage: "#4a6741",
    navy: "#1e4a7a",

    grid: "#e8dfc8",
    sepia: "#7a6e5e", // muted
    khaki: "#d4c8a8", // border

    grad: "rgba(0, 136, 168, 0.07)",
  },
  space: {
    m: "16px",
  },
});

export const dark = createTheme(themeVars, {
  color: {
    primary: "#0a84ff",

    text: "#d8ddf5",
    text2: "#fff",

    textDim: "#6b7498",
    textBright: "#f0f3ff",

    bg: "#0b0e14",
    surface: "#12161f",
    surface2: "#1a1f2e",
    surface3: "#222840",
    border: "#2a3050",

    red: "#ff5f72",
    green: "#3df0c2",
    blue: "#5cb8ff",
    yellow: "#f5a623",
    violet: "#7c6af7",
    orchid: "#e86cfa",
    turquoise: "#3df0c2",
    orange: "#f5a623",

    ink: "#f5ead7",
    paper: "#17120d",
    amber: "#d89a44",
    amberLight: "#f0c06a",
    amberPale: "#3a2b16",

    rust: "#d26a47",
    sage: "#88a67d",
    navy: "#6e9fd4",
    khaki: "#403528", // border
    grid: "#2a2218",
    sepia: "#a89781", // muted

    grad: "rgba(0, 194, 212, 0.08)",
  },
  space: {
    m: "16px",
  },
});

export const themes = { light, dark };

export const globalVars = createGlobalTheme(":root", {
  color: {
    brand: "#646cff",
  },
  font: {
    body: "Inter, system-ui, sans-serif",
  },
});
