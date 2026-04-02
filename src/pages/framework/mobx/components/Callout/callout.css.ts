import { style, styleVariants } from "@vanilla-extract/css";

const calloutBase = style({
  display: "flex",
  gap: "16px",
  padding: "16px",
  background: "var(--surface2)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
});

export const callout = styleVariants({
  info: [
    calloutBase,
    {
      color: "var(--callout-info)",
    },
  ],
  warning: [
    calloutBase,
    {
      color: "var(--callout-warning)",
    },
  ],
  error: [
    calloutBase,
    {
      color: "var(--callout-error)",
    },
  ],
});

export const calloutIcon = style({
  fontSize: "18px",
  flexShrink: 0,
  paddingTop: "1px",
});

export const calloutContent = style({
  color: "var(--text)",
});
