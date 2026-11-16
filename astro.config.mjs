// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import pwa from "./integrations/pwa.mjs";

export default defineConfig({
  site: "https://portfolio-omega-opal-16.vercel.app",

  integrations: [react(), pwa()],

  // Inline CSS into the HTML: removes the render-blocking stylesheet request (better FCP/LCP).
  build: {
    inlineStylesheets: "always",
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
      weights: ["400", "500", "600"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      weights: ["400", "500"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
    },
  ],

  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
