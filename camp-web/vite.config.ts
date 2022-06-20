/// <reference types="vitest" />
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  test: { globals: true },
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://digiq.jp/portal/search-experience",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
