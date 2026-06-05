import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  gap: "32px",
  position: "relative",
  background: themeVars.color.paper,
});

export const container = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 40px",
  position: "relative",
  zIndex: 1,
  "@media": {
    "screen and (max-width: 600px)": {
      padding: "0 20px",
    },
  },
});
