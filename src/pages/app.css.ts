import { style } from "@vanilla-extract/css";

export const shell = style({
  display: "flex",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  background: "var(--background)",
  color: "var(--foreground)",
});

export const content = style({
  display: "flex",
  flex: 1,
  flexDirection: "column",
  overflow: "hidden",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  height: "56px",
  padding: "0 1.5rem",
  borderBottom: "1px solid var(--border)",
  background: "var(--muted)",
  '@media': {
    'screen and (min-width: 768px)': {
      display: "none",
    },
  },
});

export const title = style({
  fontWeight: 600,
});

export const main = style({
  flex: 1,
  overflow: "auto",
});
