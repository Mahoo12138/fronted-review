import { themeVars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";


export const identityBox = style({
  background: themeVars.color.ink,
  color: themeVars.color.paper,
  padding: "36px 40px",
  margin: "48px 0",
  position: "relative",
  overflow: "hidden",
  "::before": {
    content: "FE → PM",
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: "80px",
    fontWeight: 500,
    color: "rgba(255, 255, 255, 0.05)",
    position: "absolute",
    right: "24px",
    top: "50%",
    transform: "translateY(-50%)",
    letterSpacing: "-2px",
    pointerEvents: "none",
  },
});

globalStyle(`${identityBox} h2`, {
  fontFamily: '"Noto Serif SC", serif',
  fontSize: "20px",
  fontWeight: 700,
  color: themeVars.color.amberLight,
  marginBottom: "12px",
});

globalStyle(`${identityBox} p`, {
  fontSize: "14px",
  lineHeight: 1.9,
  color: "rgba(255, 255, 255, 0.8)",
  maxWidth: "580px",
});

globalStyle(`${identityBox} strong`, {
  color: themeVars.color.amberLight,
});
