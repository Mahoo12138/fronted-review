import { style } from "@vanilla-extract/css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  height: "100%",
});

export const intro = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
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

export const listContainer = style({
  height: "600px",
  width: "100%",
  overflow: "auto",
  borderRadius: "var(--radius-md)",
  border: "1px solid var(--border)",
  background: "var(--card)",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
});

export const row = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "0 1.5rem",
  borderBottom: "1px solid var(--border)",
  transition: "background-color 120ms ease",
  selectors: {
    '&:hover': {
      background: "var(--muted)",
    },
  },
});

export const indexTag = style({
  width: "4rem",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  fontSize: "0.875rem",
  color: "var(--muted-foreground)",
});

export const rowLabel = style({
  fontWeight: 500,
});
