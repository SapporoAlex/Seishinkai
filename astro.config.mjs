import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://seishinkan.ne.jp",
  base: basePath,

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "ja",
        locales: {
          ja: "ja-JP",
          en: "en-US",
        },
      },
    }),
  ],

  compressHTML: false,

  build: {
    inlineStylesheets: "never",
  },

  alias: {
    "@components": "./src/components",
    "@layouts": "./src/layouts",
  },

  vite: {
    build: {
      cssMinify: false,
      cssCodeSplit: false,
      assetsInlineLimit: 0,

      rollupOptions: {
        output: {
          entryFileNames: "assets/js/main.js",
          chunkFileNames: "assets/js/[name].js",

          assetFileNames: (assetInfo) => {
            const name = assetInfo.names?.[0] || "";
            const ext = name.slice(name.lastIndexOf("."));

            if (ext === ".css") {
              return "assets/css/style.css";
            }

            return "assets/[name][extname]";
          },
        },
      },
    },
  },
});
