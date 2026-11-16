/** Companies and universities shown with their logos (files live in /public/logos). */
export const ORGS = {
  ing: { name: "ING Bank Śląski", logo: "/logos/ing.svg", url: "https://www.ing.pl" },
  abb: { name: "ABB", logo: "/logos/abb.svg", url: "https://new.abb.com/pl" },
  fairPlace: { name: "Fair Place Finance", logo: "/logos/fairplace.webp", url: "https://fairplacefinance.pl" },
  firmao: { name: "Firmao", logo: "/logos/firmao.svg", url: "https://firmao.pl" },
  giganci: { name: "Giganci Programowania", logo: "/logos/giganci.svg", url: "https://giganciprogramowania.edu.pl" },
  tul: { name: "Politechnika Łódzka", logo: "/logos/pl.svg", url: "https://p.lodz.pl" },
  metropolia: { name: "Metropolia University of Applied Sciences", logo: "/logos/metropolia.svg", url: "https://www.metropolia.fi" },
} as const;

export type OrgKey = keyof typeof ORGS;
