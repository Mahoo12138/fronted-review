import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const lifecycle = style({
  display: "flex",
  flexDirection: "column",
  gap: 0,
  margin: "24px 0",
  position: "relative",
  selectors: {
    "&::before": {
      content: "",
      position: "absolute",
      left: "23px",
      top: "24px",
      bottom: "100px",
      width: "2px",
      background: `linear-gradient(180deg, ${themeVars.color.violet}, ${themeVars.color.orchid})`,
    },
  },
});

export const lcStep = style({
  display: "flex",
  alignItems: "flex-start",
  gap: "18px",
  padding: "12px 0",
});

export const lcStepNumber = style({
  width: "48px",
  height: "48px",
  background: themeVars.color.surface2,
  border: `2px solid ${themeVars.color.violet}`,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // fontFamily: 'var(--mono)',
  fontSize: "14px",
  fontWeight: "700",
  color: themeVars.color.violet,
  flexShrink: 0,
  position: "relative",
  zIndex: 1,
});

export const lcContent = style({
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "8px",
  padding: "14px 18px",
  flex: 1,
  marginTop: "4px",
});

export const lcTitle = style({
  fontSize: "14px",
  fontWeight: "700",
  color: themeVars.color.textBright,
  marginBottom: "4px",
});

export const lcDescription = style({
  fontSize: "13px",
  color: themeVars.color.textDim,
  margin: 0,
});


export const lcCode = style({
    marginTop: "8px",
    fontFamily: "var(--mono)",
    fontSize: "12px",
    color: themeVars.color.turquoise,
    background: themeVars.color.surface2,
    padding: "6px 10px",
    borderRadius: "5px",
});