import en from "./en";
import pl from "./pl";
import type { Language } from "../data/site";

export type { Language };

export function getTranslations(lang: Language) {
  return lang === "en" ? en : pl;
}

/** Resolves the language of the current page from Astro.currentLocale. */
export const langFrom = (locale: string | undefined): Language => (locale === "en" ? "en" : "pl");
