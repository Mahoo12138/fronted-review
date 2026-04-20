import { createVar, globalStyle, style } from "@vanilla-extract/css";

import { themeVars } from "@/styles/theme.css";

const monoFont = "ui-monospace, SFMono-Regular, Consolas, monospace";

const accentColor = createVar();
const accentSoftColor = createVar();
const linkColor = createVar();

export const mdxThemeVars = {
  accentColor,
  accentSoftColor,
  linkColor,
};

export const prose = style({
  vars: {
    [accentColor]: themeVars.color.violet,
    [accentSoftColor]: "rgba(98, 84, 232, 0.12)",
    [linkColor]: themeVars.color.blue,
  },
  display: "grid",
  gap: "24px",
});

globalStyle(`${prose} > *`, {
  minWidth: 0,
  margin: 0,
});

globalStyle(`${prose} h1`, {
  fontSize: "clamp(34px, 5vw, 56px)",
  lineHeight: 1.05,
  letterSpacing: "-0.04em",
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${prose} h2`, {
  fontSize: "30px",
  lineHeight: 1.2,
  letterSpacing: "-0.03em",
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${prose} h3`, {
  fontSize: "22px",
  lineHeight: 1.32,
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${prose} h4`, {
  fontSize: "18px",
  lineHeight: 1.4,
  color: themeVars.color.textBright,
  scrollMarginTop: "88px",
});

globalStyle(`${prose} p`, {
  fontSize: "16px",
  lineHeight: 1.95,
  color: themeVars.color.text,
});

globalStyle(`${prose} strong`, {
  color: themeVars.color.textBright,
  fontWeight: 600,
});

globalStyle(`${prose} a`, {
  color: linkColor,
  textDecorationThickness: "0.08em",
  textUnderlineOffset: "0.16em",
});

globalStyle(`${prose} ul, ${prose} ol`, {
  padding: "16px 18px 16px 30px",
  color: themeVars.color.text,
  display: "grid",
  gap: "12px",
  borderRadius: "20px",
  border: `1px solid ${themeVars.color.border}`,
  background: `linear-gradient(180deg, ${themeVars.color.surface} 0%, ${themeVars.color.surface2} 100%)`,
  fontSize: "15px",
  lineHeight: 1.8,
  listStylePosition: "outside",
});

globalStyle(`${prose} ul`, {
  listStyleType: "disc",
  paddingInlineStart: "30px",
});

globalStyle(`${prose} ol`, {
  listStyleType: "decimal-leading-zero",
  paddingInlineStart: "38px",
});

globalStyle(`${prose} li`, {
  paddingInlineStart: "4px",
  lineHeight: 1.8,
  color: themeVars.color.text,
});

globalStyle(`${prose} li::marker`, {
  color: accentColor,
  fontWeight: 700,
});

globalStyle(`${prose} li > ul, ${prose} li > ol`, {
  margin: "12px 0 4px",
  paddingTop: "12px",
  paddingBottom: "12px",
  background: themeVars.color.surface,
  borderRadius: "16px",
});

globalStyle(`${prose} li > ul`, {
  listStyleType: "circle",
  paddingInlineStart: "28px",
});

globalStyle(`${prose} li > ol`, {
  listStyleType: "lower-alpha",
  paddingInlineStart: "34px",
});

globalStyle(`${prose} table`, {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "14px",
  background: themeVars.color.surface,
  borderRadius: "18px",
  overflow: "hidden",
  border: `1px solid ${themeVars.color.border}`,
});

globalStyle(`${prose} th`, {
  padding: "12px 16px",
  textAlign: "left",
  fontWeight: 600,
  color: themeVars.color.textBright,
  background: themeVars.color.surface2,
  borderBottom: `1px solid ${themeVars.color.border}`,
});

globalStyle(`${prose} td`, {
  padding: "10px 16px",
  color: themeVars.color.text,
  borderBottom: `1px solid ${themeVars.color.border}`,
  verticalAlign: "top",
});

globalStyle(`${prose} tr:last-child td`, {
  borderBottom: "none",
});

globalStyle(`${prose} hr`, {
  border: 0,
  borderTop: `1px solid ${themeVars.color.border}`,
});

globalStyle(`${prose} blockquote:not(.callout)`, {
  padding: "18px 20px",
  borderRadius: "18px",
  borderLeft: `4px solid ${accentColor}`,
  background: themeVars.color.surface2,
  color: themeVars.color.text2,
});

globalStyle(`${prose} .callout`, {
  margin: 0,
  padding: 0,
  overflow: "hidden",
  borderRadius: "18px",
  border: `1px solid ${themeVars.color.border}`,
  borderLeft: "3px solid transparent",
  background: `linear-gradient(180deg, ${themeVars.color.surface} 0%, ${themeVars.color.surface2} 100%)`,
  color: themeVars.color.text,
});

globalStyle(`${prose} .callout-title`, {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "14px 18px",
  borderBottom: `1px solid ${themeVars.color.border}`,
  fontSize: "13.5px",
  lineHeight: 1.5,
});

globalStyle(`${prose} .callout-title > strong`, {
  color: "inherit",
  fontWeight: 700,
});

globalStyle(`${prose} .callout-title.note, ${prose} .callout-title.info`, {
  color: themeVars.color.blue,
});

globalStyle(`${prose} .callout-title.tip, ${prose} .callout-title.hint, ${prose} .callout-title.important, ${prose} .callout-title.success, ${prose} .callout-title.check, ${prose} .callout-title.done`, {
  color: themeVars.color.green,
});

globalStyle(`${prose} .callout-title.warning, ${prose} .callout-title.caution, ${prose} .callout-title.attention`, {
  color: themeVars.color.yellow,
});

globalStyle(`${prose} .callout-title.danger, ${prose} .callout-title.error, ${prose} .callout-title.failure, ${prose} .callout-title.fail, ${prose} .callout-title.missing, ${prose} .callout-title.bug`, {
  color: themeVars.color.red,
});

globalStyle(`${prose} .callout-title.abstract, ${prose} .callout-title.summary, ${prose} .callout-title.tldr, ${prose} .callout-title.example, ${prose} .callout-title.todo, ${prose} .callout-title.question, ${prose} .callout-title.help, ${prose} .callout-title.faq, ${prose} .callout-title.quote, ${prose} .callout-title.cite`, {
  color: accentColor,
});

globalStyle(`${prose} .callout-icon`, {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
});

globalStyle(`${prose} .callout-icon svg`, {
  width: "18px",
  height: "18px",
});

globalStyle(`${prose} .callout-content`, {
  display: "grid",
  gap: "12px",
  padding: "16px 20px",
});

globalStyle(`${prose} .callout-content > *`, {
  margin: 0,
});

globalStyle(`${prose} .callout-content > ul, ${prose} .callout-content > ol`, {
  marginTop: "4px",
});

globalStyle(`${prose} .callout-content .callout`, {
  marginTop: "6px",
});

globalStyle(`${prose} img`, {
  display: "block",
  maxWidth: "100%",
  height: "auto",
  borderRadius: "20px",
});

export const codeBlockShell = style({
  borderRadius: "18px",
  overflow: "hidden",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface,
  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.08)",
});

export const codeBlockHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "12px",
  padding: "12px 16px",
  borderBottom: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
});

export const codeBlockMeta = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  minWidth: 0,
});

export const codeDots = style({
  display: "flex",
  gap: "6px",
  flexShrink: 0,
});

export const codeDot = style({
  width: "10px",
  height: "10px",
  borderRadius: "999px",
});

export const codeTitle = style({
  minWidth: 0,
  fontFamily: monoFont,
  fontSize: "12px",
  color: themeVars.color.textDim,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const codeBadge = style({
  flexShrink: 0,
  padding: "4px 8px",
  borderRadius: "999px",
  background: accentSoftColor,
  color: accentColor,
  fontFamily: monoFont,
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
});

export const codeBlockBody = style({
  overflowX: "auto",
});

export const fallbackPre = style({
  padding: "18px 20px",
  overflowX: "auto",
  borderRadius: "18px",
  border: `1px solid ${themeVars.color.border}`,
  background: themeVars.color.surface2,
  color: themeVars.color.text,
  fontFamily: monoFont,
  fontSize: "13px",
  lineHeight: 1.75,
});

export const inlineCode = style({
  display: "inline-block",
  padding: "2px 6px",
  borderRadius: "6px",
  background: accentSoftColor,
  color: accentColor,
  fontFamily: monoFont,
  fontSize: "0.88em",
});

globalStyle(`${codeBlockBody} .shiki`, {
  margin: 0,
  padding: "18px 20px",
  minWidth: "100%",
  background: "transparent !important",
  fontSize: "13px",
  lineHeight: 1.75,
  overflowX: "auto",
});

globalStyle(`${codeBlockBody} .shiki code`, {
  display: "grid",
  minWidth: "100%",
  fontFamily: monoFont,
});

globalStyle(`${codeBlockBody} .shiki span`, {
  fontStyle: "normal",
});