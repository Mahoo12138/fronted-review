import { themeVars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const section = style({
  margin: " 64px 0",
});

globalStyle(`${section} p`, {
  color: themeVars.color.text,
  marginBottom: "14px",
});

globalStyle(`${section} h3`, {
  fontSize: "18px",
  fontWeight: 600,
  color: themeVars.color.textBright,
  margin: "28px 0 12px",
});

globalStyle(`${section} h3::before`, {
  content: "// ",
  color: themeVars.color.textDim,
  // font-family: var(--mono);
  fontSize: "16px",
  verticalAlign: "text-bottom",
  paddingRight: "6px",
});

export const header = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "20px",
  alignItems: "center",
  marginBottom: "32px",
  paddingBottom: "16px",
  borderBottom: `1px solid ${themeVars.color.khaki}`,
});

export const number = style({
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "11px",
  color: themeVars.color.amber,
  letterSpacing: "0.1em",
  padding: "4px 8px",
  border: `1px solid ${themeVars.color.amber}`,
  lineHeight: 1,
});

export const title = style({
  fontFamily: '"Noto Serif SC", serif',
  fontSize: "24px",
  fontWeight: 700,
  color: themeVars.color.ink,
});
