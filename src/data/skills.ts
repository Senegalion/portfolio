import type { Language } from "./site";

type Label = string | Record<Language, string>;

export interface Skill {
  name: Label;
  /** Used in a commercial role (ING, Fair Place Finance, Firmao). */
  commercial?: boolean;
}

export interface SkillCategory {
  id: string;
  icon: "code" | "server" | "layout" | "database" | "cloud" | "network" | "test" | "brain" | "activity" | "wrench";
  title: Record<Language, string>;
  skills: Skill[];
}

export const label = (value: Label, lang: Language) => (typeof value === "string" ? value : value[lang]);

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    icon: "code",
    title: { pl: "Języki programowania", en: "Programming languages" },
    skills: [
      { name: "Java", commercial: true },
      { name: "SQL", commercial: true },
      { name: "JavaScript", commercial: true },
      { name: "Python" },
      { name: "TypeScript" },
      { name: "Kotlin" },
    ],
  },
  {
    id: "backend",
    icon: "server",
    title: { pl: "Backend", en: "Backend" },
    skills: [
      { name: "Spring Boot", commercial: true },
      { name: "Spring Framework", commercial: true },
      { name: "Hibernate", commercial: true },
      { name: "GraphQL", commercial: true },
      { name: { pl: "REST API", en: "REST APIs" }, commercial: true },
      { name: { pl: "Mikroserwisy", en: "Microservices" }, commercial: true },
      { name: { pl: "Protokół FIX", en: "FIX protocol" }, commercial: true },
      { name: "Spring Data JPA" },
      { name: "Spring Cloud" },
      { name: { pl: "Monolit modułowy", en: "Modular monolith" } },
      { name: "Thymeleaf" },
      { name: "JavaFX" },
    ],
  },
  {
    id: "databases",
    icon: "database",
    title: { pl: "Bazy danych", en: "Databases" },
    skills: [
      { name: "PostgreSQL", commercial: true },
      { name: "Oracle Database", commercial: true },
      { name: "Liquibase", commercial: true },
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "Flyway" },
      { name: "PostGIS" },
    ],
  },
  {
    id: "devops",
    icon: "cloud",
    title: { pl: "DevOps i chmura", en: "DevOps & cloud" },
    skills: [
      { name: "Docker", commercial: true },
      { name: "Kubernetes", commercial: true },
      { name: "Argo CD", commercial: true },
      { name: "GitLab CI/CD", commercial: true },
      { name: "Jenkins", commercial: true },
      { name: "Azure", commercial: true },
      { name: "Azure DevOps", commercial: true },
      { name: "Docker Compose" },
      { name: "Helm" },
      { name: "Minikube" },
      { name: "SonarQube" },
      { name: "AWS" },
      { name: "Vercel" },
    ],
  },
  {
    id: "messaging",
    icon: "network",
    title: { pl: "Systemy rozproszone", en: "Distributed systems" },
    skills: [
      { name: "Apache Kafka", commercial: true },
      { name: "RabbitMQ" },
      { name: "Eureka" },
      { name: "Spring Cloud Config" },
      { name: "API Gateway" },
      { name: "Apache Zookeeper" },
    ],
  },
  {
    id: "testing",
    icon: "test",
    title: { pl: "Testowanie", en: "Testing" },
    skills: [
      { name: "JUnit 5", commercial: true },
      { name: "Selenium", commercial: true },
      { name: "Selenide", commercial: true },
      { name: "REST Assured", commercial: true },
      { name: "Spock", commercial: true },
      { name: "Mockito" },
      { name: "Testcontainers" },
      { name: "WireMock" },
    ],
  },
  {
    id: "ml",
    icon: "brain",
    title: { pl: "Uczenie maszynowe i AI", en: "Machine learning & AI" },
    skills: [
      { name: "scikit-learn" },
      { name: "pandas" },
      { name: "NumPy" },
      { name: { pl: "Klasyfikacja (KNN, regresja logistyczna)", en: "Classification (KNN, logistic regression)" } },
      { name: { pl: "Sieci neuronowe i CNN", en: "Neural networks & CNNs" } },
      { name: { pl: "Logika rozmyta", en: "Fuzzy logic" } },
      { name: { pl: "Przeszukiwanie i gry (adversarial search)", en: "Search & adversarial search" } },
      { name: { pl: "Ewaluacja modeli", en: "Model evaluation" } },
    ],
  },
  {
    id: "observability",
    icon: "activity",
    title: { pl: "Obserwowalność", en: "Observability" },
    skills: [{ name: "Kibana", commercial: true }, { name: "Prometheus" }, { name: "Grafana" }, { name: "Loki" }],
  },
  {
    id: "frontend",
    icon: "layout",
    title: { pl: "Frontend", en: "Frontend" },
    skills: [
      { name: "Ext JS", commercial: true },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Astro" },
      { name: "HTML" },
      { name: "CSS" },
    ],
  },
  {
    id: "tools",
    icon: "wrench",
    title: { pl: "Narzędzia", en: "Tools" },
    skills: [
      { name: "Git", commercial: true },
      { name: "Gradle", commercial: true },
      { name: "IntelliJ IDEA", commercial: true },
      { name: "Maven" },
      { name: "Postman" },
      { name: "GitHub" },
    ],
  },
];
