import { themeVars } from "@/index.css";
import { style } from "@vanilla-extract/css";

export const mobxContainer = style({
  padding: "16px 60px",
  position: "relative",
  background: themeVars.color.bg,
  maxWidth: "1100px",
});
