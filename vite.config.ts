import path from 'path'
import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    mdx(),
    react(),
    tanstackRouter(),
    vanillaExtractPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
