import path from "path";
import { defineConfig } from "vite";

import mdx from "@mdx-js/rollup";
import remarkGfm from "remark-gfm";
import remarkCallouts from "remark-callouts";
import rehypeShiki from "@shikijs/rehype";

import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import { parseShikiMetaString } from "./plugins/transformer-meta";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx({
      remarkPlugins: [remarkGfm, remarkCallouts],
      rehypePlugins: [
        [
          rehypeShiki,
          {
            addLanguageClass: true,
            // 同时配置亮/暗两个主题
            themes: {
              light: "min-light",
              dark: "nord",
            },
            // 让 Shiki 生成 CSS 变量结构
            defaultColor: false,
            parseMetaString: parseShikiMetaString,
          },
        ],
      ],
    }),
    react(),
    tanstackRouter({
      tmpDir: path.resolve(__dirname, "./node_modules/.tanstack"),
    }),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
