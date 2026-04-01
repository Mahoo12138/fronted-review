import { keyframes, style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "@/index.css";

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(16px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

// ─── Page ────────────────────────────────────────────────────────────────────

export const page = style({
  padding: "40px 48px",
  maxWidth: "1200px",
  animation: `${fadeUp} 0.4s ease both`,
  "@media": {
    "(max-width: 768px)": {
      padding: "24px 20px",
    },
  },
});

// ─── Header ──────────────────────────────────────────────────────────────────

export const header = style({
  marginBottom: "40px",
});

export const headerMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "12px",
});

export const dot = style({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  background: themeVars.color.primary,
  flexShrink: 0,
});

export const label = style({
  fontSize: "13px",
  color: themeVars.color.textDim,
  fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
  letterSpacing: "0.04em",
});

export const title = style({
  fontSize: "32px",
  fontWeight: 800,
  color: themeVars.color.textBright,
  lineHeight: 1.15,
  marginBottom: "10px",
  letterSpacing: "-0.02em",
});

export const subtitle = style({
  fontSize: "15px",
  color: themeVars.color.textDim,
  lineHeight: 1.7,
  maxWidth: "520px",
});

export const statsRow = style({
  display: "flex",
  gap: "24px",
  marginTop: "20px",
});

export const statItem = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const statValue = style({
  fontSize: "22px",
  fontWeight: 700,
  color: themeVars.color.textBright,
  lineHeight: 1,
});

export const statKey = style({
  fontSize: "12px",
  color: themeVars.color.textDim,
});

export const divider = style({
  width: "1px",
  height: "32px",
  background: themeVars.color.border,
  alignSelf: "center",
});

// ─── Section title ───────────────────────────────────────────────────────────

export const sectionTitle = style({
  fontSize: "13px",
  fontWeight: 600,
  color: themeVars.color.textDim,
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  marginBottom: "16px",
});

// ─── Grid ────────────────────────────────────────────────────────────────────

export const grid = style({
  display: "grid",
  gap: "16px",
  gridTemplateColumns: "repeat(3, 1fr)",
  "@media": {
    "(max-width: 1024px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 640px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

// ─── Card ────────────────────────────────────────────────────────────────────

export const card = style({
  display: "flex",
  flexDirection: "column",
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "12px",
  overflow: "hidden",
  transition: "border-color 0.2s, box-shadow 0.2s",
  ":hover": {
    borderColor: themeVars.color.primary,
    boxShadow: `0 4px 24px ${themeVars.color.grad}`,
  },
});

export const cardAccent = styleVariants({
  violet: {
    height: "4px",
    background: `linear-gradient(90deg, ${themeVars.color.violet}, ${themeVars.color.orchid})`,
  },
  blue: {
    height: "4px",
    background: `linear-gradient(90deg, ${themeVars.color.blue}, ${themeVars.color.turquoise})`,
  },
  green: {
    height: "4px",
    background: `linear-gradient(90deg, ${themeVars.color.green}, ${themeVars.color.blue})`,
  },
});

export const cardBody = style({
  padding: "20px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const cardIcon = style({
  fontSize: "28px",
  lineHeight: 1,
  marginBottom: "12px",
});

export const cardTitle = style({
  fontSize: "16px",
  fontWeight: 700,
  color: themeVars.color.textBright,
  marginBottom: "6px",
});

export const cardDesc = style({
  fontSize: "13px",
  color: themeVars.color.textDim,
  lineHeight: 1.65,
  marginBottom: "20px",
});

// ─── Topic list ──────────────────────────────────────────────────────────────

export const topicList = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  flex: 1,
});

export const topicLink = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 10px",
  borderRadius: "6px",
  textDecoration: "none",
  color: themeVars.color.text,
  fontSize: "13px",
  fontWeight: 500,
  transition: "background-color 0.15s, color 0.15s",
  ":hover": {
    backgroundColor: themeVars.color.surface2,
    color: themeVars.color.primary,
  },
});

export const topicLinkDisabled = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "8px 10px",
  borderRadius: "6px",
  color: themeVars.color.textDim,
  fontSize: "13px",
  fontWeight: 500,
  opacity: 0.5,
  cursor: "default",
  userSelect: "none",
});

export const statusDot = styleVariants({
  available: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: themeVars.color.green,
    flexShrink: 0,
  },
  soon: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: themeVars.color.border,
    flexShrink: 0,
  },
});

export const topicName = style({
  flex: 1,
});

export const soonBadge = style({
  fontSize: "10px",
  fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
  color: themeVars.color.textDim,
  background: themeVars.color.surface3,
  border: `1px solid ${themeVars.color.border}`,
  padding: "1px 6px",
  borderRadius: "3px",
});

// ─── Card footer ─────────────────────────────────────────────────────────────

export const cardFooter = style({
  padding: "12px 20px",
  borderTop: `1px solid ${themeVars.color.border}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: themeVars.color.surface2,
});

export const footerProgress = style({
  fontSize: "12px",
  color: themeVars.color.textDim,
});

export const footerProgressHighlight = style({
  color: themeVars.color.green,
  fontWeight: 600,
});
