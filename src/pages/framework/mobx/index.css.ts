import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  gap: "32px",
  position: "relative",
  background: themeVars.color.bg,
});

export const mobxContainer = style({
  padding: "16px 60px",
  position: "relative",
  maxWidth: "1100px",
  flex: 1,
  minWidth: 0,
});
