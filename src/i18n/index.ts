import en from "./en";
import pl from "./pl";

export type Language = "pl" | "en";

export function getTranslations(lang: Language) {
  return lang === "en" ? en : pl;
}