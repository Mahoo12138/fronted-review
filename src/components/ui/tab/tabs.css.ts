import { style } from "@vanilla-extract/css";
import { themeVars } from "@/index.css";

export const root = style({
  margin: "20px 0",
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "10px",
  overflow: "hidden",
});

export const list = style({
  display: "flex",
  borderBottom: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
  position: "relative",
});

export const tab = style({
  padding: "10px 20px",
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "12px",
  color: themeVars.color.textDim,
  background: "none",
  border: "none",
  cursor: "pointer",
  borderBottom: "2px solid transparent",
  marginBottom: "-1px",
  transition: "all 0.15s",
  outline: "none",

  ":hover": {
    color: themeVars.color.textBright,
  },

  selectors: {
    "&[data-active]": {
      color: themeVars.color.violet,
      borderBottomColor: themeVars.color.violet,
    },
    "&:focus-visible": {
      outline: `2px solid ${themeVars.color.violet}`,
      outlineOffset: "-2px",
    },
  },
});

export const panel = style({
  display: "block",

  selectors: {
    "&[data-hidden]": {
      display: "none",
    },
  },
});
