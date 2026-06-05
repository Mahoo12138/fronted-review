import { themeVars } from "@/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const cardsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
  gap: "1px",
  background: "var(--border)",
  border: "1px solid var(--border)",
  marginBottom: "24px",
});


export const card = style({
    background: themeVars.color.paper,
    padding: "28px 24px",
    position: "relative",
    // "": {
    //     background: themeVars.color.amberPale,
    //     border: `1px solid ${themeVars.color.amber}`,
    // }
});

export const cardIcon = style({
    fontSize: "24px",
    marginBottom: "12px",
    display: "block"
});


export const cardTitle = style({
    fontFamily: '"Noto Serif SC", serif',
    fontSize: "15px",
    fontWeight: 700,
    marginBottom: "8px",
    color: themeVars.color.ink,
});

export const cardBody = style({
    fontSize: "13px",
    color: themeVars.color.sepia,
    lineHeight: 1.75
});


const converted = {
  ".card.highlight": { background: "var(--amber-pale)" },
  ".card.highlight .card-title": { color: "var(--rust)" }
}
