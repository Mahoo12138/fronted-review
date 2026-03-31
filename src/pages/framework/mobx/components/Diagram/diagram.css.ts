import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "@/index.css";

export const light = style({
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "12px",
  padding: "32px",
  margin: "24px 0",
  position: "relative",
  overflow: "hidden",

  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: `linear-gradient(90deg, ${themeVars.color.violet}, ${themeVars.color.turquoise}, ${themeVars.color.orange})`,
    },
  },
});
export const { dark } = styleVariants({
  dark: [light, { boxShadow: "0 2px 16px rgba(0,0,0,.05)" }],
});
