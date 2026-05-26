import { keyframes, style } from "@vanilla-extract/css";
import { themeVars } from "@/styles/theme.css";

// ===== KEYFRAMES =====

const fadeUp = keyframes({
  from: { opacity: 0, transform: "translateY(32px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

const fireflyFloat = keyframes({
  "0%, 100%": { transform: "translate(0, 0) scale(1)", opacity: "0.2" },
  "20%": { transform: "translate(18px, -30px) scale(1.5)", opacity: "0.9" },
  "40%": { transform: "translate(-12px, -55px) scale(0.65)", opacity: "0.3" },
  "60%": { transform: "translate(-24px, -16px) scale(1.35)", opacity: "0.8" },
  "80%": { transform: "translate(6px, -46px) scale(0.75)", opacity: "0.35" },
});

const glowPulse = keyframes({
  "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
  "50%": { opacity: "0.65", transform: "scale(1.06)" },
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% center" },
  "100%": { backgroundPosition: "200% center" },
});

// ===== PAGE =====

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
});

// ===== BACKGROUND LAYERS =====

export const bgGlow1 = style({
  position: "absolute",
  width: "clamp(400px, 50vw, 700px)",
  height: "clamp(400px, 50vw, 700px)",
  borderRadius: "50%",
  background:
    "radial-gradient(ellipse, rgba(220, 170, 50, 0.13) 0%, rgba(180, 130, 30, 0.04) 40%, transparent 70%)",
  top: "-12%",
  right: "-8%",
  pointerEvents: "none",
  animation: `${glowPulse} 7s ease-in-out infinite`,
});

export const bgGlow2 = style({
  position: "absolute",
  width: "clamp(350px, 40vw, 550px)",
  height: "clamp(350px, 40vw, 550px)",
  borderRadius: "50%",
  background:
    "radial-gradient(ellipse, rgba(100, 190, 130, 0.1) 0%, rgba(60, 140, 80, 0.03) 40%, transparent 70%)",
  bottom: "-8%",
  left: "-6%",
  pointerEvents: "none",
  animation: `${glowPulse} 9s ease-in-out infinite reverse`,
});

export const bgGlow3 = style({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background:
    "radial-gradient(ellipse, rgba(240, 200, 80, 0.06) 0%, transparent 70%)",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  pointerEvents: "none",
  animation: `${glowPulse} 6s ease-in-out 2s infinite`,
});

export const bgPattern = style({
  position: "absolute",
  inset: 0,
  backgroundImage: `
    radial-gradient(circle at 15% 25%, rgba(170, 150, 90, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 55% 65%, rgba(110, 170, 130, 0.04) 1px, transparent 1px),
    radial-gradient(circle at 75% 15%, rgba(190, 160, 70, 0.04) 1.2px, transparent 1.2px)
  `,
  backgroundSize: "80px 80px, 100px 100px, 110px 110px",
  backgroundPosition: "0 0, 20px 25px, 35px 8px",
  pointerEvents: "none",
  opacity: 0.6,
});

// ===== FIREFLIES =====

export const firefly = style({
  position: "absolute",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(255, 230, 140, 0.95) 0%, rgba(245, 185, 55, 0.4) 25%, transparent 60%)",
  pointerEvents: "none",
  animationName: fireflyFloat,
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
});

// ===== CONTENT =====

export const content = style({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: "0 24px",
  maxWidth: "780px",
  width: "100%",
});

// ===== BADGE =====

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  background: "rgba(200, 160, 40, 0.07)",
  border: "1px solid rgba(200, 160, 40, 0.22)",
  color: "rgba(200, 155, 50, 0.9)",
  fontSize: "13px",
  fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
  padding: "6px 18px",
  borderRadius: "20px",
  marginBottom: "40px",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  animation: `${fadeUp} 0.7s ease both`,
});

// ===== TITLE =====

export const title = style({
  fontSize: "clamp(40px, 7vw, 76px)",
  fontWeight: 700,
  lineHeight: 1.15,
  color: themeVars.color.textBright,
  marginBottom: "20px",
  letterSpacing: "-0.02em",
  fontFamily:
    '"Playfair Display", "Noto Serif SC", "STSong", "SimSun", serif',
  animation: `${fadeUp} 0.7s 0.1s ease both`,
});

export const gradientText = style({
  background:
    "linear-gradient(135deg, #c89930 0%, #e0c050 30%, #8ab868 60%, #5a9a65 100%)",
  backgroundSize: "200% auto",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: `${shimmer} 5s linear infinite, ${fadeUp} 0.7s 0.1s ease both`,
});

// ===== SUBTITLE =====

export const subtitle = style({
  fontSize: "clamp(15px, 2vw, 17px)",
  color: themeVars.color.textDim,
  lineHeight: 1.8,
  maxWidth: "500px",
  marginBottom: "56px",
  animation: `${fadeUp} 0.7s 0.2s ease both`,
});

// ===== FEATURE CARDS =====

export const features = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  width: "100%",
  marginBottom: "52px",
  animation: `${fadeUp} 0.7s 0.3s ease both`,
  "@media": {
    "(max-width: 600px)": {
      gridTemplateColumns: "1fr",
      maxWidth: "320px",
    },
  },
});

export const featureCard = style({
  background: "rgba(255, 255, 255, 0.025)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: "14px",
  padding: "24px 18px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
  ":hover": {
    borderColor: "rgba(200, 170, 70, 0.3)",
    transform: "translateY(-4px)",
    boxShadow:
      "0 10px 40px rgba(0, 0, 0, 0.2), 0 0 25px rgba(200, 160, 50, 0.06)",
  },
});

export const featureIcon = style({
  fontSize: "28px",
  lineHeight: 1,
  marginBottom: "2px",
  transition: "transform 0.3s",
  selectors: {
    [`${featureCard}:hover &`]: {
      transform: "scale(1.15)",
    },
  },
});

export const featureTitle = style({
  fontSize: "14px",
  fontWeight: 600,
  color: themeVars.color.textBright,
  letterSpacing: "0.01em",
});

export const featureDesc = style({
  fontSize: "12px",
  color: themeVars.color.textDim,
  lineHeight: 1.7,
  textAlign: "left",
});

// ===== ENTER BUTTON =====

export const enterBtn = style({
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  background: "linear-gradient(135deg, #b8860b 0%, #d4a745 50%, #c4941a 100%)",
  color: "#1a1000",
  fontWeight: 600,
  fontSize: "15px",
  padding: "15px 42px",
  borderRadius: "28px",
  border: "none",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0 4px 28px rgba(200, 150, 20, 0.35)",
  animation: `${fadeUp} 0.7s 0.4s ease both`,
  ":hover": {
    transform: "translateY(-2px) scale(1.03)",
    boxShadow: "0 8px 40px rgba(200, 150, 20, 0.5)",
  },
  ":active": {
    transform: "translateY(0) scale(0.98)",
  },
});

export const enterBtnArrow = style({
  display: "inline-block",
  transition: "transform 0.3s",
  selectors: {
    [`${enterBtn}:hover &`]: {
      transform: "translateX(3px)",
    },
  },
});

// ===== FOOTER =====

export const footer = style({
  position: "absolute",
  bottom: "28px",
  fontSize: "12px",
  color: themeVars.color.textDim,
  opacity: 0.5,
  fontFamily: "var(--mono, 'JetBrains Mono', monospace)",
  letterSpacing: "0.02em",
});
