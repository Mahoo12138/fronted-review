import { themeVars } from "@/index.css";
import { style } from "@vanilla-extract/css";

export const pageWrapper = style({
  display: "flex",
  gap: "32px",
  maxWidth: "1320px",
  position: "relative",
});

export const mobxContainer = style({
  padding: "16px 60px",
  position: "relative",
  background: themeVars.color.bg,
  maxWidth: "1100px",
  flex: 1,
  minWidth: 0,
});
