import { style } from "@vanilla-extract/css";

export const root = style({
  width: "100%",
  height: "100%",
  minHeight: 0,
});

export const body = style({
  width: "100%",
  minHeight: "100%",
  boxSizing: "border-box",
});