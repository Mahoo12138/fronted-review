import { keyframes, style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

const slideFromRight = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(34px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const slideFromLeft = keyframes({
  from: {
    opacity: 0,
    transform: "translateX(-34px)",
  },
  to: {
    opacity: 1,
    transform: "translateX(0)",
  },
});

const baseToast = style({
  position: "absolute",
  top: "18px",
  insetInlineEnd: "16px",
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  maxWidth: "min(100% - 32px, 320px)",
  padding: "10px 14px",
  borderRadius: "999px",
  background: themeVars.color.textBright,
  color: themeVars.color.surface,
  fontSize: "13px",
  fontWeight: 600,
  boxShadow: "0 12px 28px rgba(16, 24, 40, 0.18)",
  animationDuration: "480ms",
  animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
  animationFillMode: "both",
});

export const lab = style({
  display: "grid",
  gap: "18px",
});

export const toolbar = style({
  display: "grid",
  gap: "12px",
});

export const toolbarActions = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  justifyContent: "space-between",
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
  lineHeight: 1.8,
  color: themeVars.color.textDim,
});

export const stage = style({
  display: "grid",
  gap: "16px",
  padding: "20px",
  borderRadius: "24px",
  border: `1px solid ${themeVars.color.border}`,
  background:
    `radial-gradient(circle at top right, rgba(41, 128, 216, 0.12), transparent 30%), linear-gradient(180deg, ${themeVars.color.surface2} 0%, ${themeVars.color.surface} 100%)`,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "18px",
  '@media': {
    '(max-width: 960px)': {
      gridTemplateColumns: "1fr",
    },
  },
});

export const caseCard = style({
  display: "grid",
  gap: "16px",
  padding: "20px",
  borderRadius: "22px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
});

export const caseHeader = style({
  display: "grid",
  gap: "6px",
});

export const caseTitle = style({
  margin: 0,
  fontSize: "22px",
  color: themeVars.color.textBright,
});

export const caseText = style({
  margin: 0,
  fontSize: "14px",
  lineHeight: 1.75,
  color: themeVars.color.text,
});

export const actionBar = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "12px",
  '@media': {
    '(max-width: 560px)': {
      gridTemplateColumns: "1fr",
    },
  },
});

const baseNavButton = style({
  height: "44px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  borderRadius: "14px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
  color: themeVars.color.textBright,
  fontSize: "14px",
  fontWeight: 600,
});

export const navButton = style([baseNavButton]);

export const navButtonPrimary = style([
  baseNavButton,
  {
    background: themeVars.color.textBright,
    color: themeVars.color.surface,
    borderColor: themeVars.color.textBright,
  },
]);

export const breadcrumb = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "10px",
  padding: "12px 14px",
  borderRadius: "16px",
  background: themeVars.color.surface2,
  color: themeVars.color.text,
  fontSize: "13px",
  fontWeight: 600,
});

export const crumb = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
});

export const separator = style({
  color: themeVars.color.textDim,
});

export const separatorMirrored = style({
  color: themeVars.color.textDim,
  selectors: {
    '[dir="rtl"] &': {
      transform: "scaleX(-1)",
    },
  },
});

export const motionLane = style({
  position: "relative",
  minHeight: "84px",
  borderRadius: "18px",
  border: `1px dashed ${themeVars.color.border}`,
  background: themeVars.color.surface2,
  overflow: "hidden",
});

export const toastPhysical = style([
  baseToast,
  {
    animationName: slideFromRight,
  },
]);

export const toastLogical = style([
  baseToast,
  {
    animationName: slideFromRight,
    selectors: {
      '[dir="rtl"] &': {
        animationName: slideFromLeft,
      },
    },
  },
]);

export const staticIconRow = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

export const staticChip = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 12px",
  borderRadius: "999px",
  background: "rgba(0, 184, 148, 0.12)",
  color: themeVars.color.green,
  fontSize: "12px",
  fontWeight: 700,
});