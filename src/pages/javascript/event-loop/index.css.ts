import { themeVars } from "@/index.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  background: themeVars.color.bg,
  color: themeVars.color.text,
  transition: "background 0.35s, color 0.35s",
  lineHeight: 1.6,
  overflowX: "hidden",
});
