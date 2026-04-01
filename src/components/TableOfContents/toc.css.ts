import { themeVars } from "@/index.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const tocAside = style({
  position: "sticky",
  top: "40px",
  maxHeight: "calc(100vh - 80px)",
  overflowY: "auto",
  width: "220px",
  flexShrink: 0,
  paddingLeft: "24px",
  borderLeft: `1px solid ${themeVars.color.border}`,
});

export const tocTitle = style({
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  color: themeVars.color.textDim,
  marginBottom: "12px",
});

export const tocList = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const tocLink = style({
  display: "block",
  fontSize: "13px",
  lineHeight: 1.5,
  color: themeVars.color.textDim,
  textDecoration: "none",
  padding: "4px 0",
  borderRadius: "4px",
  transition: "color 0.15s ease",
  cursor: "pointer",
  ":hover": {
    color: themeVars.color.textBright,
  },
});

export const tocLinkActive = style({
  color: themeVars.color.violet,
  fontWeight: 600,
});

export const tocIndent = styleVariants({
  "2": { paddingLeft: "0px" },
  "3": { paddingLeft: "16px" },
  "4": { paddingLeft: "32px" },
});
