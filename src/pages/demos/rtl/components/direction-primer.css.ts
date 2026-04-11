import { style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

export const lab = style({
  display: "grid",
  gap: "18px",
});

export const toolbar = style({
  display: "grid",
  gap: "14px",
  padding: "18px 20px",
  borderRadius: "22px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

export const controlGroup = style({
  display: "grid",
  gap: "10px",
});

export const controlLabel = style({
  fontSize: "12px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: themeVars.color.textDim,
  fontWeight: 700,
});

export const buttonRow = style({
  display: "inline-flex",
  flexWrap: "wrap",
  gap: "6px",
  width: "fit-content",
  padding: "4px",
  borderRadius: "16px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
});

export const toggleButton = style({
  height: "34px",
  padding: "0 14px",
  borderRadius: "12px",
  border: "1px solid transparent",
  background: "transparent",
  color: themeVars.color.textDim,
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.04em",
  cursor: "pointer",
  transition: "background-color 140ms ease, color 140ms ease, border-color 140ms ease, box-shadow 140ms ease",
  selectors: {
    '&:hover': {
      background: themeVars.color.surface,
      color: themeVars.color.textBright,
    },
    '&:focus-visible': {
      outline: "none",
      boxShadow: "0 0 0 2px rgba(41, 128, 216, 0.18)",
    },
    '&[aria-pressed="true"]': {
      background: themeVars.color.textBright,
      borderColor: themeVars.color.textBright,
      color: themeVars.color.surface,
      boxShadow: "0 10px 22px rgba(16, 24, 40, 0.12)",
    },
  },
});

export const helperText = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.7,
  color: themeVars.color.textDim,
});

export const previewShell = style({
  padding: "20px",
  borderRadius: "24px",
  border: `1px solid ${themeVars.color.border}`,
  background:
    `radial-gradient(circle at top right, rgba(0, 184, 148, 0.14), transparent 32%), linear-gradient(180deg, ${themeVars.color.surface2} 0%, ${themeVars.color.surface} 100%)`,
});

export const previewCard = style({
  display: "grid",
  gap: "18px",
  padding: "24px",
  borderRadius: "22px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
  boxShadow: "0 14px 32px rgba(16, 24, 40, 0.06)",
});

export const metaRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
});

export const metaBadge = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "4px 10px",
  borderRadius: "999px",
  background: themeVars.color.surface2,
  color: themeVars.color.textBright,
  fontSize: "12px",
  fontWeight: 700,
});

export const headerRow = style({
  display: "flex",
  alignItems: "center",
  gap: "14px",
});

export const iconWrap = style({
  width: "50px",
  height: "50px",
  borderRadius: "16px",
  display: "grid",
  placeItems: "center",
  background: "rgba(230, 126, 34, 0.12)",
  color: themeVars.color.orange,
  flexShrink: 0,
});

export const titleWrap = style({
  display: "grid",
  gap: "4px",
  minWidth: 0,
});

export const title = style({
  margin: 0,
  fontSize: "24px",
  lineHeight: 1.2,
  color: themeVars.color.textBright,
});

export const subtitle = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.7,
  color: themeVars.color.textDim,
});

export const field = style({
  display: "grid",
  gap: "8px",
});

export const fieldLabel = style({
  fontSize: "13px",
  fontWeight: 700,
  color: themeVars.color.textBright,
});

export const inputWrap = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  height: "46px",
  padding: "0 14px",
  borderRadius: "14px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
  color: themeVars.color.textDim,
});

export const input = style({
  flex: 1,
  minWidth: 0,
  border: 0,
  outline: "none",
  background: "transparent",
  color: themeVars.color.textBright,
  fontSize: "14px",
});

export const listBlock = style({
  display: "grid",
  gap: "12px",
});

export const listTitle = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "13px",
  color: themeVars.color.textBright,
  fontWeight: 700,
});

export const checklist = style({
  margin: 0,
  paddingInlineStart: "20px",
  display: "grid",
  gap: "10px",
  color: themeVars.color.text,
});

export const snippet = style({
  margin: 0,
  padding: "12px 14px",
  borderRadius: "14px",
  background: themeVars.color.surface2,
  color: themeVars.color.textDim,
  fontFamily: "Consolas, Monaco, monospace",
  fontSize: "13px",
  overflowX: "auto",
});

export const previewHint = style({
  margin: 0,
});

export const previewMeta = style({
  margin: 0,
});

export const previewBadge = style({
  margin: 0,
});
