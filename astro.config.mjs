import { defineConfig } from "astro/config";

export default defineConfig({
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
                    assetFileNames: (assetInfo) => {
                        const name = Array.isArray(assetInfo.names) ? assetInfo.names[0] : assetInfo.names[0] || "";
                        const ext = name.slice(name.lastIndexOf("."));
                        if (assetInfo.type === "asset" && ext === ".css") {
                            return "seishinkai/assets/css/style.css";
                        }
                        if (assetInfo.type === "asset" && ext === ".js") {
                            return "seishinkai/assets/js/main.js";
                        }
                        return "seishinkai/assets/[name][extname]";
                    },
                },
            },
        },
    },
});
