// Certificates and completed courses. Scans live in /public/certificates as
// "<image>.webp" (full size, opened in the viewer) and "<image>-thumb.webp" (card).
import type { Language } from "./site";

export const CERT_CATEGORIES = ["cloud", "java", "ai", "cs", "practice"] as const;
export type CertCategory = (typeof CERT_CATEGORIES)[number];

type Localized = Record<Language, string>;

export type Certificate = {
  name: string;
  issuer: string;
  /** "YYYY-MM" */
  date: string;
  category: CertCategory;
  /** Base file name in /public/certificates; without it the entry is listed as a course. */
  image?: string;
  /** Shown in the large cards at the top of the section. */
  featured?: boolean;
  credentialId?: string;
  note?: Localized;
  skills?: string[];
};

export const CERTIFICATES: Certificate[] = [
  // Featured
  {
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "2026-05",
    category: "cloud",
    image: "azure-az-900",
    featured: true,
    credentialId: "AD65BA877E2CC24B",
    note: {
      pl: "Oficjalny egzamin Microsoft z podstaw chmury Azure: usługi, bezpieczeństwo, zarządzanie i koszty.",
      en: "Official Microsoft exam on Azure cloud fundamentals: services, security, governance and cost management.",
    },
    skills: ["Azure"],
  },
  {
    name: "Java Test Automation Internship — Staż z Lwem",
    issuer: "ING Bank Śląski",
    date: "2026-02",
    category: "practice",
    image: "ing-staz-z-lwem",
    featured: true,
    note: {
      pl: "Ukończony program stażowy w ING — automatyzacja testów w Javie, po którym dostałem awans na stanowisko DevOps.",
      en: "Completed internship programme at ING — Java test automation, followed by a promotion to a DevOps role.",
    },
    skills: ["Java", "JUnit 5", "Selenide", "REST Assured"],
  },
  {
    name: "CS50x — Introduction to Computer Science",
    issuer: "Harvard University",
    date: "2025-07",
    category: "cs",
    image: "cs50x",
    featured: true,
    note: {
      pl: "Kurs Harvardu: dziesięć zestawów zadań i projekt końcowy — algorytmy, struktury danych, C, Python, SQL i web.",
      en: "Harvard's course: ten problem sets and a final project — algorithms, data structures, C, Python, SQL and web.",
    },
    skills: ["C", "Python", "SQL", "Algorithms"],
  },
  {
    name: "Building AI — Advanced",
    issuer: "University of Helsinki · MinnaLearn",
    date: "2026-11",
    category: "ai",
    image: "building-ai",
    featured: true,
    credentialId: "p7ds7zrkn8",
    note: {
      pl: "Kurs za 2 punkty ECTS z wyróżnieniem za zaawansowane programowanie — praktyczne algorytmy uczenia maszynowego w Pythonie.",
      en: "A 2 ECTS course with the advanced coding honour — hands-on machine learning algorithms in Python.",
    },
    skills: ["Machine Learning", "Deep Learning", "Python"],
  },

  // With a certificate scan
  {
    name: "Elements of AI",
    issuer: "University of Helsinki · MinnaLearn",
    date: "2026-11",
    category: "ai",
    image: "elements-of-ai",
    note: { pl: "Kurs za 2 punkty ECTS z podstaw sztucznej inteligencji.", en: "A 2 ECTS course on the fundamentals of artificial intelligence." },
    skills: ["Machine Learning", "Deep Learning"],
  },
  {
    name: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2023-06",
    category: "cloud",
    image: "cisco-ccna-itn",
    note: {
      pl: "Konfiguracja routerów i przełączników, adresacja IPv4/IPv6, model OSI i diagnozowanie problemów z łącznością.",
      en: "Configuring routers and switches, IPv4/IPv6 addressing, the OSI model and troubleshooting connectivity.",
    },
    skills: ["Computer Networks"],
  },
  {
    name: "Java Backend Developer (Spring Boot)",
    issuer: "JetBrains Academy · Hyperskill",
    date: "2025-07",
    category: "java",
    image: "jetbrains-java-backend",
    note: { pl: "12 projektów i 386 tematów.", en: "12 projects and 386 topics." },
    skills: ["Spring Boot", "Hibernate", "Data Structures"],
  },
  {
    name: "Java Full Stack Developer",
    issuer: "JetBrains Academy · Hyperskill",
    date: "2025-07",
    category: "java",
    image: "jetbrains-java-fullstack",
    note: { pl: "10 projektów i 286 tematów.", en: "10 projects and 286 topics." },
    skills: ["Java", "HTML", "Spring Boot"],
  },
  {
    name: "Java Developer",
    issuer: "JetBrains Academy · Hyperskill",
    date: "2025-07",
    category: "java",
    image: "jetbrains-java-developer",
    note: { pl: "11 projektów i 250 tematów.", en: "11 projects and 250 topics." },
    skills: ["Java", "Data Structures"],
  },
  {
    name: "Junior Java Ready",
    issuer: "Junior Java Ready",
    date: "2025-04",
    category: "java",
    image: "junior-java-ready",
    note: {
      pl: "Kurs, dzięki któremu rozbudowałem swój system dla klubu karate o Flyway, Gradle, płatności PayPal i powiadomienia e-mail.",
      en: "The course in which I extended my karate club system with Flyway, Gradle, PayPal payments and email notifications.",
    },
    skills: ["Spring Boot", "MongoDB", "Docker", "Testcontainers"],
  },
  {
    name: "Software Engineer",
    issuer: "HackerRank",
    date: "2025-05",
    category: "cs",
    image: "hackerrank-software-engineer",
    skills: ["Java", "Data Structures"],
  },
  {
    name: "Problem Solving (Intermediate)",
    issuer: "HackerRank",
    date: "2025-05",
    category: "cs",
    image: "hackerrank-problem-solving-intermediate",
    skills: ["Algorithms", "Data Structures"],
  },
  {
    name: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "2025-05",
    category: "cs",
    image: "hackerrank-problem-solving-basic",
    skills: ["Algorithms", "Data Structures"],
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2025-05",
    category: "cs",
    image: "hackerrank-java-basic",
    skills: ["Java"],
  },
  {
    name: "Design4All Hackathon",
    issuer: "Lodz University of Technology · Shibaura Institute of Technology",
    date: "2024-10",
    category: "practice",
    image: "design4all-hackathon",
    note: {
      pl: "Międzynarodowy hackathon z elektroniki i VR. Zbudowałem frontend w React działający na telefonach i współpracowałem na żywo z zespołami sprzętowymi.",
      en: "An international electronics and VR hackathon. I built a mobile-friendly React frontend and worked live with the hardware teams.",
    },
    skills: ["React"],
  },
  {
    name: "IntegratESG International Conference",
    issuer: "Politechnika Łódzka",
    date: "2026-11",
    category: "practice",
    image: "integratesg-conference",
    note: {
      pl: "Międzynarodowa konferencja o wdrażaniu standardów ESG w biznesie i edukacji.",
      en: "An international conference on integrating ESG standards into business and education.",
    },
  },
  {
    name: "Agile Scrum Master",
    issuer: "Simplilearn",
    date: "2025-04",
    category: "practice",
    image: "agile-scrum-master",
    skills: ["Scrum"],
  },

  // Completed courses (no scan on the site)
  { name: "Apache Kafka", issuer: "Coding Chef", date: "2026-03", category: "java", skills: ["Apache Kafka", "Java"] },
  { name: "Building Microservices with Spring Boot & Spring Cloud", issuer: "Udemy", date: "2025-10", category: "java", skills: ["Microservices", "Spring Cloud"] },
  { name: "Java SE 21 Developer — Oracle Certified Professional 1Z0-830 (prep course)", issuer: "Udemy", date: "2025-08", category: "java", skills: ["Java"] },
  { name: "Kotlin for Java Developers", issuer: "Udemy", date: "2025-08", category: "java", skills: ["Kotlin"] },
  { name: "Master Microservices with Spring Boot and Spring Cloud", issuer: "Udemy", date: "2025-07", category: "java", skills: ["Spring Cloud", "PostgreSQL"] },
  { name: "Master Spring Boot 3 & Spring Framework 6 with Java", issuer: "Udemy", date: "2025-05", category: "java", skills: ["Spring Boot", "Hibernate"] },
  { name: "Spring Boot + Apache Kafka — The Practical Guide", issuer: "Udemy", date: "2025-05", category: "java", skills: ["Spring Boot", "Apache Kafka"] },
  { name: "Docker & Kubernetes: The Practical Guide", issuer: "Udemy", date: "2025-04", category: "cloud", skills: ["Docker", "Kubernetes", "AWS"] },
  { name: "Java Virtual Threads & Concurrency Masterclass", issuer: "Udemy", date: "2025-04", category: "java", skills: ["Java", "Concurrency"] },
  { name: "Zajavka — Java Developer (22 workshops)", issuer: "Udemy", date: "2025-04", category: "java", skills: ["Java", "Hibernate"] },
  { name: "Responsive Web Design", issuer: "freeCodeCamp", date: "2025-03", category: "cs", credentialId: "senegal-rwd", skills: ["HTML", "CSS"] },
];

/** Exams I'm working towards. */
export const UPCOMING_CERTS: { name: string; issuer: string; status: "preparing" | "planned" }[] = [
  { name: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", status: "preparing" },
  { name: "Java SE 25 Developer (1Z0-831)", issuer: "Oracle", status: "planned" },
];
