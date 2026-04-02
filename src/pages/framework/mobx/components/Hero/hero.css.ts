import { style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

export const hero = style({
  padding: "80px 0 60px",
  position: "relative",
});

export const heroTitle = style({
  fontSize: "56px",
  fontWeight: 800,
  lineHeight: 1.1,
  color: themeVars.color.textBright,
  marginBottom: "20px",
});

export const gradientText = style({
  background: `linear-gradient(135deg, ${themeVars.color.violet} 0%, ${themeVars.color.orange} 50%, ${themeVars.color.yellow} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
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
  fontSize: "17px",
  color: themeVars.color.textDim,
  maxWidth: "620px",
  lineHeight: 1.8,
});
