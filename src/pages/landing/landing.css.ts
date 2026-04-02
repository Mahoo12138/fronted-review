import { keyframes, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(24px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const pulse = keyframes({
  "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
  "50%": { opacity: 0.8, transform: "scale(1.05)" },
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% center" },
  "100%": { backgroundPosition: "200% center" },
});

export const page = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeVars.color.bg,
  color: themeVars.color.text,
  position: "relative",
  overflow: "hidden",
  fontFamily: "Inter, system-ui, sans-serif",
});

export const bgGlow1 = style({
  position: "absolute",
  width: "600px",
  height: "600px",
  borderRadius: "50%",
  background:
    "radial-gradient(ellipse, rgba(98,84,232,0.15) 0%, transparent 65%)",
  top: "-100px",
  left: "-100px",
  pointerEvents: "none",
  animation: `${pulse} 6s ease-in-out infinite`,
});

export const bgGlow2 = style({
  position: "absolute",
  width: "500px",
  height: "500px",
  borderRadius: "50%",
  background:
    "radial-gradient(ellipse, rgba(41,128,216,0.12) 0%, transparent 65%)",
  bottom: "-80px",
  right: "-80px",
  pointerEvents: "none",
  animation: `${pulse} 8s ease-in-out infinite reverse`,
});

export const bgGrid = style({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    linear-gradient(to right, ${themeVars.color.border} 1px, transparent 1px),
    linear-gradient(to bottom, ${themeVars.color.border} 1px, transparent 1px)
  `,
  backgroundSize: "48px 48px",
  opacity: 0.35,
  pointerEvents: "none",
  maskImage:
    "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
});

export const content = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "0 24px",
  maxWidth: "800px",
  width: "100%",
});

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(98,84,232,0.12)",
  border: `1px solid rgba(98,84,232,0.3)`,
  color: themeVars.color.violet,
  fontSize: "12px",
  fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
  padding: "5px 14px",
  borderRadius: "4px",
  marginBottom: "32px",
  animation: `${fadeUp} 0.6s ease both`,
});

export const title = style({
  fontSize: "clamp(42px, 8vw, 80px)",
  fontWeight: 800,
  lineHeight: 1.05,
  color: themeVars.color.textBright,
  marginBottom: "16px",
  letterSpacing: "-0.03em",
  animation: `${fadeUp} 0.6s 0.1s ease both`,
});

export const gradientText = style({
  background: `linear-gradient(135deg, ${themeVars.color.violet} 0%, ${themeVars.color.blue} 50%, ${themeVars.color.orchid} 100%)`,
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${shimmer} 4s linear infinite, ${fadeUp} 0.6s 0.1s ease both`,
});

export const subtitle = style({
  fontSize: "clamp(15px, 2.5vw, 18px)",
  color: themeVars.color.textDim,
  lineHeight: 1.75,
  maxWidth: "540px",
  marginBottom: "48px",
  animation: `${fadeUp} 0.6s 0.2s ease both`,
});

export const features = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
  width: "100%",
  marginBottom: "48px",
  animation: `${fadeUp} 0.6s 0.3s ease both`,
  "@media": {
    "(max-width: 600px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const featureCard = style({
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "10px",
  padding: "20px 16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  transition: "border-color 0.2s, transform 0.2s",
  ":hover": {
    borderColor: themeVars.color.violet,
    transform: "translateY(-2px)",
  },
});

export const featureIcon = style({
  fontSize: "24px",
  lineHeight: 1,
});

export const featureTitle = style({
  fontSize: "14px",
  fontWeight: 600,
  color: themeVars.color.textBright,
});

export const featureDesc = style({
  fontSize: "12px",
  color: themeVars.color.textDim,
  lineHeight: 1.6,
  textAlign: "left",
});

export const enterBtn = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  background: `linear-gradient(135deg, ${themeVars.color.violet}, ${themeVars.color.blue})`,
  color: "#fff",
  fontWeight: 600,
  fontSize: "15px",
  padding: "14px 36px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
  boxShadow: "0 4px 24px rgba(98,84,232,0.35)",
  animation: `${fadeUp} 0.6s 0.4s ease both`,
  ":hover": {
    opacity: 0.9,
    transform: "translateY(-2px)",
    boxShadow: "0 8px 32px rgba(98,84,232,0.45)",
  },
  ":active": {
    transform: "translateY(0)",
  },
});

export const footer = style({
  position: "absolute",
  bottom: "24px",
  fontSize: "12px",
  color: themeVars.color.textDim,
  opacity: 0.6,
});
