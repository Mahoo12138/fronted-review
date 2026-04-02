import { style } from "@vanilla-extract/css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const heading = style({
  fontSize: "1.5rem",
  lineHeight: 1.2,
  fontWeight: 700,
  letterSpacing: "-0.02em",
});

export const mutedText = style({
  color: "var(--muted-foreground)",
});
