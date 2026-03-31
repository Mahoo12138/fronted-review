import { themeVars } from "@/index.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const section = style({
  marginBottom: "80px",
  scrollMarginTop: "40px",
});

globalStyle(`${section} p`, {
  color: themeVars.color.text,
  marginBottom: "14px",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginBottom: "32px",
  paddingBottom: "16px",
  borderBottom: `1px solid ${themeVars.color.border}`,
});

export const number = style({
  width: "36px",
  height: "36px",
  background: themeVars.color.surface2,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--mono)",
  fontSize: "13px",
  color: themeVars.color.violet,
  flexShrink: 0,
});

export const title = style({
  fontSize: "28px",
  fontWeight: 700,
  color: themeVars.color.textBright,
});
