export const SITE = {
  name: "Łukasz Pelikan",
  email: "lupelikan@gmail.com",
  phone: "+48 506 349 098",
  phoneHref: "tel:+48506349098",
  github: "https://github.com/Senegalion",
  githubRepositories: "https://github.com/Senegalion?tab=repositories",
  linkedin: "https://www.linkedin.com/in/%C5%82ukasz-pelikan/",
  /** Drop a PDF at this path in /public and the "Download CV" buttons appear automatically. */
  cvPath: "/cv/Lukasz_Pelikan_CV.pdf",
} as const;

export type Language = "pl" | "en";

export const localePath = (lang: Language, hash = "") => `${lang === "en" ? "/en/" : "/"}${hash}`;

/** Pages of the site. Both languages share the structure; only the slugs differ. */
export const PAGES = ["home", "about", "experience", "projects", "skills", "education", "teams", "contact"] as const;
export type PageKey = (typeof PAGES)[number];

const SLUGS: Record<PageKey, Record<Language, string>> = {
  home: { pl: "", en: "" },
  about: { pl: "o-mnie", en: "about" },
  experience: { pl: "doswiadczenie", en: "experience" },
  projects: { pl: "projekty", en: "projects" },
  skills: { pl: "umiejetnosci", en: "skills" },
  education: { pl: "edukacja", en: "education" },
  teams: { pl: "kola-naukowe", en: "student-teams" },
  contact: { pl: "kontakt", en: "contact" },
};

/** "/o-mnie/", "/en/about/", "/projekty/#research"… */
export const pagePath = (page: PageKey, lang: Language, hash = "") => {
  const slug = SLUGS[page][lang];
  return `${lang === "en" ? "/en/" : "/"}${slug ? `${slug}/` : ""}${hash}`;
};

/** Formats "2025-09" as "wrz 2025" / "Sep 2025". `null` means "present". */
export function formatMonth(value: string | null, lang: Language, present: string) {
  if (!value) return present;
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  })
    .format(new Date(Date.UTC(year, month - 1, 1)))
    .replace(".", "");
}

export const formatPeriod = (from: string, to: string | null, lang: Language, present: string) =>
  `${formatMonth(from, lang, present)} — ${formatMonth(to, lang, present)}`;
