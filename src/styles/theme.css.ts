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
