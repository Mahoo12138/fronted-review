import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const buttonBase = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  whiteSpace: "nowrap",
  borderRadius: "var(--radius-md)",
  border: "1px solid transparent",
  fontSize: "0.875rem",
  fontWeight: 500,
  transition: "background-color 140ms ease, color 140ms ease, border-color 140ms ease, box-shadow 140ms ease",
  outline: "none",
  selectors: {
    '&:focus-visible': {
      boxShadow: "0 0 0 2px var(--ring)",
    },
    '&:disabled': {
      pointerEvents: "none",
      opacity: 0.5,
    },
  },
});

globalStyle(`${buttonBase} svg`, {
  pointerEvents: "none",
  width: "1rem",
  height: "1rem",
  flexShrink: 0,
});

export const buttonVariant = styleVariants({
  default: {
    background: "var(--primary)",
    color: "var(--primary-foreground)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    selectors: {
      '&:hover': {
        opacity: 0.92,
      },
    },
  },
  destructive: {
    background: "var(--destructive)",
    color: "var(--primary-foreground)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    selectors: {
      '&:hover': {
        opacity: 0.9,
      },
    },
  },
  outline: {
    borderColor: "var(--input)",
    background: "var(--background)",
    color: "var(--foreground)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
    selectors: {
      '&:hover': {
        background: "var(--accent)",
        color: "var(--accent-foreground)",
      },
    },
  },
  secondary: {
    background: "var(--secondary)",
    color: "var(--secondary-foreground)",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.08)",
    selectors: {
      '&:hover': {
        opacity: 0.85,
      },
    },
  },
  ghost: {
    background: "transparent",
    color: "var(--foreground)",
    selectors: {
      '&:hover': {
        background: "var(--accent)",
        color: "var(--accent-foreground)",
      },
    },
  },
  link: {
    borderColor: "transparent",
    background: "transparent",
    color: "var(--primary)",
    textUnderlineOffset: "4px",
    selectors: {
      '&:hover': {
        textDecoration: "underline",
      },
    },
  },
});

export const buttonSize = styleVariants({
  default: {
    height: "2.25rem",
    padding: "0.5rem 1rem",
  },
  sm: {
    height: "2rem",
    padding: "0.375rem 0.75rem",
    borderRadius: "var(--radius-md)",
    fontSize: "0.75rem",
  },
  lg: {
    height: "2.5rem",
    padding: "0.5rem 2rem",
    borderRadius: "var(--radius-md)",
  },
  icon: {
    width: "2.25rem",
    height: "2.25rem",
    padding: 0,
  },
});
