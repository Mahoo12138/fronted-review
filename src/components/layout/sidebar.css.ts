import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

// ─── Aside ───────────────────────────────────────────────────────────────────

export const aside = style({
  display: "none",
  flexDirection: "column",
  borderRight: `1px solid ${themeVars.color.border}`,
  backgroundColor: themeVars.color.surface,
  transition: "width 200ms ease",
  "@media": {
    "(min-width: 768px)": {
      display: "flex",
    },
  },
});

export const asideWidth = styleVariants({
  collapsed: { width: "72px" },
  expanded: { width: "256px" },
});

// ─── Header ──────────────────────────────────────────────────────────────────

export const header = style({
  display: "flex",
  height: "56px",
  alignItems: "center",
  flexShrink: 0,
  borderBottom: `1px solid ${themeVars.color.border}`,
  "@media": {
    "(min-width: 1024px)": {
      height: "60px",
    },
  },
});

export const headerPadding = styleVariants({
  collapsed: { padding: "0 8px" },
  expanded: {
    padding: "0 16px",
    "@media": {
      "(min-width: 1024px)": { padding: "0 24px" },
    },
  },
});

export const logo = style({
  display: "flex",
  minWidth: 0,
  flex: 1,
  alignItems: "center",
  fontWeight: 600,
  color: themeVars.color.textBright,
  textDecoration: "none",
});

export const logoLayout = styleVariants({
  collapsed: { justifyContent: "center" },
  expanded: { gap: "8px", paddingRight: "12px" },
});

export const logoText = style({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: "14px",
});

// ─── Nav body ────────────────────────────────────────────────────────────────

export const navBody = style({
  flex: 1,
  overflowY: "auto",
  padding: "8px 0",
});

export const nav = style({
  display: "grid",
  alignItems: "start",
  fontSize: "14px",
  fontWeight: 500,
  gap: "4px",
});

export const navPadding = styleVariants({
  collapsed: { padding: "0 8px" },
  expanded: {
    padding: "0 8px",
    "@media": {
      "(min-width: 1024px)": { padding: "0 16px" },
    },
  },
});

// ─── Menu link ───────────────────────────────────────────────────────────────

export const menuLink = style({
  display: "flex",
  borderRadius: "8px",
  padding: "8px 12px",
  color: themeVars.color.textDim,
  textDecoration: "none",
  transition: "color 150ms, background-color 150ms",
  ":hover": {
    color: themeVars.color.primary,
  },
  selectors: {
    "&.active, &[data-status='active']": {
      backgroundColor: themeVars.color.surface2,
      color: themeVars.color.primary,
    },
  },
});

export const menuLinkLayout = styleVariants({
  collapsed: { justifyContent: "center" },
  expanded: { alignItems: "center", gap: "12px" },
});

// ─── Group ───────────────────────────────────────────────────────────────────

export const groupItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const groupBtn = style({
  display: "flex",
  width: "100%",
  borderRadius: "8px",
  padding: "8px 12px",
  color: themeVars.color.textDim,
  background: "none",
  border: "none",
  cursor: "pointer",
  transition: "color 150ms, background-color 150ms",
  ":hover": {
    color: themeVars.color.primary,
    backgroundColor: themeVars.color.surface2,
  },
});

export const groupBtnLayout = styleVariants({
  collapsed: { justifyContent: "center" },
  expanded: { alignItems: "center", gap: "12px" },
});

export const groupLabel = style({
  flex: 1,
  textAlign: "left",
});

export const chevron = style({
  flexShrink: 0,
  transition: "transform 200ms",
});

export const chevronOpen = style({
  transform: "rotate(90deg)",
});

// ─── Children list ───────────────────────────────────────────────────────────

export const childrenList = style({
  marginLeft: "20px",
  display: "grid",
  gap: "4px",
  borderLeft: `1px solid ${themeVars.color.border}`,
  paddingLeft: "8px",
});

export const childLink = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "8px",
  padding: "8px 12px",
  color: themeVars.color.textDim,
  textDecoration: "none",
  transition: "color 150ms, background-color 150ms",
  ":hover": {
    color: themeVars.color.primary,
  },
  selectors: {
    "&.active, &[data-status='active']": {
      backgroundColor: themeVars.color.surface2,
      color: themeVars.color.primary,
    },
  },
});

// ─── Footer ──────────────────────────────────────────────────────────────────

export const footer = style({
  flexShrink: 0,
  borderTop: `1px solid ${themeVars.color.border}`,
  padding: "8px",
});

export const footerActions = style({
  display: "grid",
  gap: "4px",
});

export const footerActionsCollapsed = style({
  justifyItems: "center",
});

export const actionBtn = style({
  display: "flex",
  borderRadius: "8px",
  padding: "8px 12px",
  color: themeVars.color.textDim,
  background: "none",
  border: "none",
  cursor: "pointer",
  transition: "color 150ms, background-color 150ms",
  ":hover": {
    backgroundColor: themeVars.color.surface2,
    color: themeVars.color.primary,
  },
});

export const actionBtnLayout = styleVariants({
  collapsed: {
    width: "36px",
    height: "36px",
    alignItems: "center",
    justifyContent: "center",
  },
  expanded: { alignItems: "center", gap: "12px" },
});
