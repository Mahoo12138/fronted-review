import { themeVars } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

const calloutBase = style({
  display: "flex",
  gap: "14px",
  padding: "16px 20px",
  borderRadius: "8px",
  margin: "16px 0",
  fontSize: "13.5px",
  lineHeight: 1.6,
});

export const callout = styleVariants({
  info: [
    calloutBase,
    {
      background: "rgba(92,184,255,.08)",
      borderLeft: `3px solid ${themeVars.color.blue}`,
      color: themeVars.color.blue,
    },
  ],
  warning: [
    calloutBase,
    {
      background: "rgba(245,166,35,.08)",
      borderLeft: `3px solid ${themeVars.color.yellow}`,
      color: themeVars.color.yellow,
    },
  ],
  tip: [
    calloutBase,
    {
      background: "rgba(61,240,194,.08)",
      borderLeft: `3px solid ${themeVars.color.green}`,
      color: themeVars.color.green,
    },
  ],
  error: [
    calloutBase,
    {
      background: "rgba(220,53,69,.08)",
      borderLeft: `3px solid ${themeVars.color.red}`,
      color: themeVars.color.red,
    },
  ],
});

export const calloutIcon = style({
  fontSize: "18px",
  flexShrink: 0,
  paddingTop: "1px",
});

export const calloutContent = style({
  // color: themeVars.color.text,
});
