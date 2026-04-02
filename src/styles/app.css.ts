import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("body", {
  background: themeVars.color.bg,
  color: themeVars.color.text,
});
