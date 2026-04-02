import { style } from "@vanilla-extract/css";

export const card = style({
  borderRadius: "var(--radius-lg)",
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--card-foreground)",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
});

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",
  padding: "1.5rem",
});

export const cardTitle = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  lineHeight: 1,
  letterSpacing: "-0.02em",
});

export const cardDescription = style({
  fontSize: "0.875rem",
  color: "var(--muted-foreground)",
});

export const cardContent = style({
  padding: "0 1.5rem 1.5rem",
});

export const cardFooter = style({
  display: "flex",
  alignItems: "center",
  padding: "0 1.5rem 1.5rem",
});
