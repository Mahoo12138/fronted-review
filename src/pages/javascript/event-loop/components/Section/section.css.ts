import { themeVars } from "@/index.css";
import { style } from "@vanilla-extract/css";

export const section = style({
  padding: "4rem 1.5rem",
  maxWidth: "960px",
  margin: "0 auto",
});

export const label = style({
  fontSize: "0.65rem",
  color: themeVars.color.orchid,
  letterSpacing: "0.25em",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
});

export const title = style({
  fontSize: "1.9rem",
  fontWeight: 800,
  color: themeVars.color.text2,
  marginBottom: "0.75rem",
});
