import { style, styleVariants } from "@vanilla-extract/css";
import { light, themeVars } from "@/styles/theme.css";

export const warpper = style({
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "10px",
  overflow: "hidden",
  margin: "16px 0",
  position: "relative",
  selectors: {
    [`${light} &`]: {
      boxShadow: "0 2px 12px rgba(0,0,0,.06)",
    },
  },
});

export const header = style({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 18px",
    background: themeVars.color.surface2,
    borderBottom: `1px solid ${themeVars.color.border}`,
});

export const filename = style({
  fontFamily: "var(--mono)",
  fontSize: "12px",
  color: themeVars.color.textDim,
});

export const langBadge = style({
  fontFamily: "var(--mono)",
  fontSize: "10px",
  padding: "3px 8px",
  background: "rgba(124,106,247,.2)",
  color: themeVars.color.violet,
  borderRadius: "4px",
});

export const dots = style({
  display: "flex",
  gap: "6px",
});

const dotBase = style({
  width: "11px",
  height: "11px",
  borderRadius: "50%",
});

export const dotColor = styleVariants({
  violet: [dotBase, { background: themeVars.color.violet }],
  blue: [dotBase, { background: themeVars.color.blue }],
  green: [dotBase, { background: themeVars.color.green }],
});
