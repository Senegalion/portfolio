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
      name: "Instrument Serif",
      cssVariable: "--font-instrument",
      weights: ["400"],
      styles: ["normal", "italic"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["Georgia", "Times New Roman", "serif"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Schibsted Grotesk",
      cssVariable: "--font-schibsted",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
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
