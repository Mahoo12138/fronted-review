import { style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

const baseCard = style({
  position: "relative",
  display: "grid",
  gap: "20px",
  minHeight: "220px",
  overflow: "hidden",
  borderRadius: "24px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
  boxShadow: "0 16px 34px rgba(16, 24, 40, 0.06)",
});

const baseRail = style({
  position: "absolute",
  top: "10px",
  bottom: "10px",
  width: "6px",
  borderRadius: "999px",
  background: `linear-gradient(180deg, ${themeVars.color.orange} 0%, ${themeVars.color.turquoise} 100%)`,
});

const baseBadge = style({
  position: "absolute",
  top: "16px",
  padding: "4px 10px",
  borderRadius: "999px",
  background: "rgba(0, 184, 148, 0.12)",
  color: themeVars.color.green,
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

const baseIconWrap = style({
  width: "46px",
  height: "46px",
  borderRadius: "14px",
  display: "grid",
  placeItems: "center",
  background: themeVars.color.surface2,
  color: themeVars.color.blue,
  flexShrink: 0,
});

const baseAction = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "10px 14px",
  borderRadius: "14px",
  background: themeVars.color.textBright,
  color: themeVars.color.surface,
  fontSize: "13px",
  fontWeight: 700,
});

export const lab = style({
  display: "grid",
  gap: "18px",
});

export const toolbar = style({
  display: "grid",
  gap: "12px",
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
  color: themeVars.color.textDim,
  fontSize: "14px",
  lineHeight: 1.8,
});

export const sandbox = style({
  padding: "20px",
  borderRadius: "24px",
  border: `1px solid ${themeVars.color.border}`,
  background:
    `radial-gradient(circle at top left, rgba(41, 128, 216, 0.12), transparent 30%), linear-gradient(180deg, ${themeVars.color.surface2} 0%, ${themeVars.color.surface} 100%)`,
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

export const physicalCard = style([
  baseCard,
  {
    paddingTop: "24px",
    paddingBottom: "22px",
    paddingLeft: "28px",
    paddingRight: "20px",
    textAlign: "left",
  },
]);

export const logicalCard = style([
  baseCard,
  {
    paddingTop: "24px",
    paddingBottom: "22px",
    paddingInlineStart: "28px",
    paddingInlineEnd: "20px",
    textAlign: "start",
  },
]);

export const edgeRailPhysical = style([baseRail, { left: 0 }]);

export const edgeRailLogical = style([baseRail, { insetInlineStart: 0 }]);

export const badgePhysical = style([baseBadge, { right: "16px" }]);

export const badgeLogical = style([baseBadge, { insetInlineEnd: "16px" }]);

export const headerRow = style({
  display: "flex",
  alignItems: "flex-start",
});

export const iconWrapPhysical = style([baseIconWrap, { marginRight: "12px" }]);

export const iconWrapLogical = style([baseIconWrap, { marginInlineEnd: "12px" }]);

export const copyBlock = style({
  display: "grid",
  gap: "6px",
  minWidth: 0,
});

export const kicker = style({
  fontSize: "12px",
  fontWeight: 700,
  color: themeVars.color.textDim,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
});

export const cardTitle = style({
  margin: 0,
  fontSize: "22px",
  lineHeight: 1.2,
  color: themeVars.color.textBright,
});

export const description = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.8,
  color: themeVars.color.text,
});

export const footerRow = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginTop: "auto",
  flexWrap: "wrap",
});

export const metric = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "8px 10px",
  borderRadius: "12px",
  background: themeVars.color.surface2,
  color: themeVars.color.textBright,
  fontSize: "13px",
  fontWeight: 600,
});

export const actionPhysical = style([baseAction, { marginLeft: "auto" }]);

export const actionLogical = style([baseAction, { marginInlineStart: "auto" }]);

export const legendGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "14px",
  '@media': {
    '(max-width: 920px)': {
      gridTemplateColumns: "1fr",
    },
  },
});

export const legendCard = style({
  padding: "16px 18px",
  borderRadius: "18px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

export const legendTitle = style({
  display: "block",
  marginBottom: "6px",
  color: themeVars.color.textBright,
  fontSize: "14px",
});

export const legendText = style({
  margin: 0,
  color: themeVars.color.textDim,
  fontSize: "13px",
  lineHeight: 1.7,
});