import { themeVars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const page = style({
  display: "flex",
  gap: "32px",
  alignItems: "flex-start",
  padding: "20px 0 64px",
  background: themeVars.color.bg,
});
