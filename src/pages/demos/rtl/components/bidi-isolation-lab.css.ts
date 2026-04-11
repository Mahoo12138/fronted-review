import { style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

export const lab = style({
  display: "grid",
  gap: "18px",
});

export const toolbar = style({
  display: "grid",
  gap: "14px",
});

export const formGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
  '@media': {
    '(max-width: 720px)': {
      gridTemplateColumns: "1fr",
    },
  },
});

export const field = style({
  display: "grid",
  gap: "8px",
});

export const label = style({
  fontSize: "13px",
  fontWeight: 700,
  color: themeVars.color.textBright,
});

export const input = style({
  height: "44px",
  borderRadius: "14px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
  color: themeVars.color.textBright,
  padding: "0 14px",
  fontSize: "14px",
});

export const presetRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const helperText = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.8,
  color: themeVars.color.textDim,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "18px",
  '@media': {
    '(max-width: 920px)': {
      gridTemplateColumns: "1fr",
    },
  },
});

export const caseCard = style({
  display: "grid",
  gap: "14px",
  padding: "20px",
  borderRadius: "22px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

export const caseHeader = style({
  display: "grid",
  gap: "8px",
});

const baseBadge = style({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

export const caseBadge = style([
  baseBadge,
  {
    background: "rgba(230, 126, 34, 0.12)",
    color: themeVars.color.orange,
  },
]);

export const caseBadgeSafe = style([
  baseBadge,
  {
    background: "rgba(0, 184, 148, 0.12)",
    color: themeVars.color.green,
  },
]);

export const caseTitle = style({
  margin: 0,
  fontSize: "22px",
  color: themeVars.color.textBright,
});

export const previewBubble = style({
  display: "grid",
  gap: "12px",
  padding: "18px",
  borderRadius: "18px",
  background: themeVars.color.surface2,
});

export const messageText = style({
  margin: 0,
  fontSize: "18px",
  lineHeight: 1.95,
  color: themeVars.color.textBright,
});

export const messageMeta = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.8,
  color: themeVars.color.text,
});

export const token = style({
  padding: "0 6px",
  borderRadius: "8px",
  background: "rgba(41, 128, 216, 0.12)",
  color: themeVars.color.blue,
});

export const noteCard = style({
  padding: "16px 18px",
  borderRadius: "18px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

export const noteText = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.75,
  color: themeVars.color.textDim,
});