import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "apple-touch-icon.png",
        "pwa-maskable-512x512.png",
        "assets/img.png",
        "assets/Sertifikat/ukom.png",
        "assets/Sertifikat/databasefoundations.png",
        "assets/Sertifikat/javafundamental.png",
        "assets/weeding.png",
        "assets/tiktok.png",
      ],

      manifest: {
        name: "cv-sdzli",
        short_name: "cv-sdzli",
        description: "website cv-sdzli app",
        theme_color: "#ffffff",

        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,jsx,css,html,}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
    }),
  ],
});
