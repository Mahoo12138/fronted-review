import { globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

export const pageWrapper = style({
  display: "flex",
  gap: "32px",
  alignItems: "flex-start",
  padding: "20px 0 64px",
});

export const content = style({
  flex: 1,
  minWidth: 0,
  maxWidth: "1040px",
  padding: "0 32px 0 56px",
  '@media': {
    '(max-width: 1080px)': {
      padding: "0 20px",
    },
  },
});

export const article = style({
  display: "grid",
  gap: "24px",
});

export const hero = style({
  position: "relative",
  overflow: "hidden",
  padding: "38px 36px 32px",
  borderRadius: "32px",
  border: `1px solid ${themeVars.color.border}`,
  background:
    `radial-gradient(circle at top left, rgba(230, 126, 34, 0.17), transparent 34%), radial-gradient(circle at 88% 12%, rgba(0, 184, 148, 0.14), transparent 30%), linear-gradient(180deg, ${themeVars.color.surface} 0%, ${themeVars.color.surface2} 100%)`,
  boxShadow: "0 30px 70px rgba(16, 24, 40, 0.08)",
});

export const heroBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "6px 12px",
  borderRadius: "999px",
  background: "rgba(230, 126, 34, 0.12)",
  color: themeVars.color.orange,
  fontSize: "12px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
});

export const heroTitle = style({
  margin: "16px 0 12px",
  fontSize: "clamp(38px, 5.8vw, 64px)",
  lineHeight: 1,
  letterSpacing: "-0.05em",
  color: themeVars.color.textBright,
  maxWidth: "12ch",
});

export const heroLead = style({
  margin: 0,
  maxWidth: "68ch",
  fontSize: "18px",
  lineHeight: 1.9,
  color: themeVars.color.text,
});

globalStyle(`${article} h2`, {
  margin: "18px 0 0",
  fontSize: "30px",
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${article} h3`, {
  margin: "8px 0 0",
  fontSize: "22px",
  lineHeight: 1.35,
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${article} p`, {
  margin: 0,
  fontSize: "16px",
  lineHeight: 1.95,
  color: themeVars.color.text,
});

globalStyle(`${article} ul, ${article} ol`, {
  margin: 0,
  paddingInlineStart: "22px",
  color: themeVars.color.text,
  display: "grid",
  gap: "10px",
});

globalStyle(`${article} li`, {
  lineHeight: 1.8,
});

globalStyle(`${article} strong`, {
  color: themeVars.color.textBright,
});

globalStyle(`${article} code`, {
  fontFamily: "Consolas, Monaco, monospace",
  fontSize: "0.95em",
});

globalStyle(`${article} a`, {
  color: themeVars.color.blue,
});

globalStyle(`${article} table`, {
  width: "100%",
  borderCollapse: "collapse",
  margin: "8px 0",
  overflow: "hidden",
  borderRadius: "18px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

globalStyle(`${article} th`, {
  textAlign: "left",
  fontSize: "13px",
  color: themeVars.color.textBright,
  background: themeVars.color.surface2,
});

globalStyle(`${article} th, ${article} td`, {
  padding: "12px 14px",
  borderBottom: `1px solid ${themeVars.color.border}`,
  verticalAlign: "top",
});

globalStyle(`${article} tr:last-child td`, {
  borderBottom: 0,
});

globalStyle(`${article} > *`, {
  minWidth: 0,
});

globalStyle(`${pageWrapper} aside`, {
  top: "20px",
});

globalStyle(`${pageWrapper} aside`, {
  '@media': {
    '(max-width: 1280px)': {
      display: "none",
    },
  },
});