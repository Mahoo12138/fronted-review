import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const hero = style({
  textAlign: "center",
  padding: "5rem 2rem 3rem",
  background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${themeVars.color.grad}, transparent)`,
  borderBottom: `1px solid ${themeVars.color.border}`,
});

export const heroTag = style({
  fontFamily: "JetBrains Mono, monospace",
  fontSize: "0.7rem",
  color: themeVars.color.violet,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  marginBottom: "1rem",
});

export const heroTitle = style({
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  fontWeight: 800,
  lineHeight: 1.1,
  color: themeVars.color.textBright,
});

export const boldText = style({
  color: themeVars.color.violet,
});

export const heroBadge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(124,106,247,.15)",
  border: "1px solid rgba(124,106,247,.35)",
  color: themeVars.color.violet,
  fontSize: "12px",
  fontFamily: "var(--mono)",
  padding: "5px 14px",
  borderRadius: "4px",
  marginBottom: "24px",
});

export const heroGlow = style({
  position: "absolute",
  width: "500px",
  height: "300px",
  background:
    "radial-gradient(ellipse, rgba(124,106,247,.12) 0%, transparent 70%)",
  top: "40px",
  right: "-60px",
  pointerEvents: "none",
});

export const heroDesc = style({
  marginTop: "1rem",
  color: themeVars.color.textDim,
  maxWidth: "560px",
  marginInline: "auto",
  fontSize: "1rem",
});
