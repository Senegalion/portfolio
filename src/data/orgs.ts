type Org = {
  name: string;
  url: string;
  /** Logo file in /public/logos. Without one the tile shows `mark` as a text wordmark. */
  logo?: string;
  /** Short wordmark used when there is no logo file. */
  mark?: string;
  /** Light logo that needs the brand's dark background behind it. */
  dark?: boolean;
};

/** Companies, universities and student teams shown with their logos (files live in /public/logos). */
export const ORGS = {
  ing: { name: "ING Bank Śląski", logo: "/logos/ing.svg", url: "https://www.ing.pl" },
  abb: { name: "ABB", logo: "/logos/abb.svg", url: "https://new.abb.com/pl" },
  fairPlace: { name: "Fair Place Finance", logo: "/logos/fairplace.webp", url: "https://fairplacefinance.pl" },
  firmao: { name: "Firmao", logo: "/logos/firmao.svg", url: "https://firmao.pl" },
  giganci: { name: "Giganci Programowania", logo: "/logos/giganci.svg", url: "https://giganciprogramowania.edu.pl" },
  tul: { name: "Politechnika Łódzka", logo: "/logos/pl.svg", url: "https://p.lodz.pl" },
  metropolia: { name: "Metropolia University of Applied Sciences", logo: "/logos/metropolia.svg", url: "https://www.metropolia.fi" },
  solarTeam: { name: "Lodz Solar Team", logo: "/logos/lodz-solar-team.webp", url: "https://lodzsolarteam.p.lodz.pl", dark: true },
  kino: { name: "Koło Informatycznego Niepokoju — Sekcja AI", logo: "/logos/kino.webp", url: "https://ftims.p.lodz.pl" },
  ubicomp: { name: "UbiCOMP Research Group", logo: "/logos/ubicomp.svg", url: "https://ubicomp.pl" },
} satisfies Record<string, Org>;

export type OrgKey = keyof typeof ORGS;
