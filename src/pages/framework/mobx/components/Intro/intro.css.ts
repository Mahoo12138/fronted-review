import { themeVars } from "@/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";



export const flows = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
  flexWrap: "wrap",
  rowGap: "16px",
});

export const flowArrow = style({
  color: themeVars.color.textDim,
  fontSize: "20px",
  margin: "0 8px",
  flexShrink: 0,
});

const flowNode = style({
  background: themeVars.color.surface2,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "10px",
  padding: "16px 22px",
  textAlign: "center",
  minWidth: "130px",
  position: "relative",
  transition: "all .2s",
  cursor: "default",

  selectors: {
    "&:hover": {
      borderColor: themeVars.color.violet,
      transform: "translateY(-2px)",
      boxShadow: `0 8px 24px rgba(124,106,247,.2)`,
    },
  },
});

export const nodeVariant = styleVariants({
  action: [
    flowNode,
    {
      borderColor: "rgba(245,166,35,.4)",
    },
  ],
  observable: [
    flowNode,
    {
      borderColor: "rgba(61,240,194,.4)",
    },
  ],
  computed: [
    flowNode,
    {
      borderColor: "rgba(124,106,247,.4)",
    },
  ],
  reaction: [
    flowNode,
    {
      borderColor: "rgba(232,108,250,.4)",
    },
  ],
});

export namespace Flow {
  export const icon = style({
    fontSize: "24px",
    marginBottom: "6px",
  });

  const label = style({
    fontSize: "13px",
    fontWeight: 600,
    color: themeVars.color.textBright,
  });

  export const sub = style({
    fontSize: "11px",
    color: themeVars.color.textDim,
    // fontFamily: themeVars.font.mono,
    marginTop: "3px",
  });

  export const labelVariant = styleVariants({
    action: [
      label,
      {
        color: themeVars.color.orange,
      },
    ],
    observable: [
      label,
      {
        color: themeVars.color.turquoise,
      },
    ],
    computed: [
      label,
      {
        color: themeVars.color.violet,
      },
    ],
    reaction: [
      label,
      {
        color: themeVars.color.orchid,
      },
    ],
  });
}

export const desc = style({
  textAlign: "center",
  marginTop: "20px",
  fontSize: "12px",
  color: themeVars.color.textDim,
});

export const cards = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: "16px",
  margin: "20px 0",
});

export const card = style({
  background: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: "10px",
  padding: "20px",
  transition: "all .2s",

  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      borderColor: themeVars.color.violet,
      boxShadow: `0 8px 24px rgba(124,106,247,.15)`,
    },
  },
});

export namespace Card {
  export const icon = style({
    fontSize: "28px",
    marginBottom: "10px",
  });

  export const title = style({
    fontSize: "14px",
    fontWeight: 700,
    color: themeVars.color.textBright,
    marginBottom: "6px",
  });

  export const desc = style({
    fontSize: "12.5px",
    color: themeVars.color.textDim,
    lineHeight: 1.6,
    margin: 0,
  });
}
