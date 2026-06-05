import { themeVars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const hero = style({
  padding: "80px 0 60px",
  borderBottom: "2px solid ${themeVars.color.ink}",
});

export const heroEyebrow = style({
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "11px",
  letterSpacing: "0.3em",
  textTransform: "uppercase",
  color: themeVars.color.amber,
  marginBottom: "24px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  "::before": {
    content: "",
    display: "inline-block",
    width: "32px",
    height: "1px",
    background: themeVars.color.amber,
  },
});

globalStyle(`${hero} h1`, {
  fontFamily: '"Noto Serif SC", serif',
  fontSize: "clamp(36px, 6vw, 64px)",
  fontWeight: 900,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  marginBottom: "8px",
});

export const heroAccent = style({
  color: themeVars.color.amber,
  position: "relative",
  "::after": {
    content: "",
    position: "absolute",
    bottom: "4px",
    left: 0,
    right: 0,
    height: "3px",
    background: themeVars.color.amberLight,
    zIndex: -1,
  },
});

export const heroSub = style({
  fontSize: "15px",
  color: themeVars.color.sepia,
  marginTop: "20px",
  //   maxWidth: "520px",
  fontWeight: 400,
});

export const heroMeta = style({
  display: "flex",
  gap: "32px",
  marginTop: "40px",
  flexWrap: "wrap",
});
export const metaItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const metaLabel = style({
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "10px",
  letterSpacing: "0.2em",
  color: themeVars.color.sepia,
  textTransform: "uppercase",
});
export const metaValue = style({
  fontFamily: '"Noto Serif SC", serif',
  fontSize: "18px",
  fontWeight: 700,
  color: themeVars.color.ink,
});