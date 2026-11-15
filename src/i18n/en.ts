import type { Translations } from "./pl";

const en: Translations = {
  meta: {
    title: "Łukasz Pelikan — Junior DevOps Engineer & Java Backend Developer",
    description:
      "Portfolio of Łukasz Pelikan: Java and Spring Boot, DevOps, Azure cloud, distributed systems and machine learning. Experience at ING Bank Śląski and Fair Place Finance.",
    ogLocale: "en_GB",
    ogImageAlt: "Łukasz Pelikan — Junior DevOps Engineer, Java Backend",
  },
  navigation: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    contactButton: "Contact",
    mobileContact: "Contact me",
    home: "Go to homepage",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    language: "Language",
    skipToContent: "Skip to content",
    search: "Search",
    openPalette: "Open command palette",
  },
  splash: {
    lines: ["initialising environment", "loading modules: backend · devops · ml", "ready"],
    skip: "Skip",
  },
  hero: {
    badge: "Software Engineer · Java & DevOps",
    nowLabel: "now",
    now: [
      "Junior DevOps Engineer @ ING Bank Śląski",
      "MSc: Software Engineering & ML",
      "Microsoft Certified: Azure Fundamentals",
      "research: root cause analysis in microservices",
    ],
    title: "I build backend systems and ",
    titleHighlight: "the infrastructure behind them.",
    description:
      "I'm Łukasz — a Junior DevOps Engineer at ING Bank Śląski. My foundation is Java and Spring Boot, and I increasingly focus on delivery automation, the cloud and machine learning.",
    explore: "Explore my work",
    github: "View GitHub",
    cv: "Download CV",
    location: "Łódź, Poland",
    availability: "Open to new opportunities",
    tabsLabel: "Profile in three formats",
    profileFile: "Engineer.java",
    classKeyword: "public class",
    className: "Engineer",
    stringKeyword: "private final String",
    listKeyword: "private final List<String>",
    nameLabel: "name",
    roleLabel: "role",
    focusLabel: "focus",
    name: "Łukasz Pelikan",
    role: "Junior DevOps Engineer",
    backend: "Backend",
    cloud: "Cloud",
    devops: "DevOps",
    ml: "Machine Learning",
    backendDescription: "Java & Spring",
    cloudDescription: "Azure & AWS",
    delivery: "Delivery",
    deliveryDescription: "CI/CD & Kubernetes",
    terminalComment: "# tech stack, by area",
  },
  marquee: {
    label: "Technologies I've worked with — commercially, at university and in projects",
  },
  about: {
    badge: "About me",
    title: "Engineering beyond writing code.",
    paragraph1:
      "I'm a Computer Science graduate from Lodz University of Technology and an engineer working at the intersection of backend development, cloud infrastructure and DevOps.",
    paragraph2:
      "My core stack is Java and Spring Boot, but I'm equally interested in how software is tested, delivered, monitored and operated after it leaves a developer's machine — from architecture through CI/CD to observability.",
    paragraph3:
      "I currently work in the banking industry, where reliability, security and disciplined engineering matter more than impressive demos.",
    paragraph4:
      "In parallel I'm pursuing two Master's degrees: Applied Computer Science (Software Engineering and Machine Learning) and a Master of Business Studies — because I want to understand not only how to build a system, but also what value it creates for an organisation.",
    contact: "Let's talk",
    photoAlt: "Portrait photo of Łukasz Pelikan",
    areas: {
      backend: {
        title: "Backend engineering",
        description:
          "Designing maintainable services and APIs with Java, Spring Boot, relational databases and automated tests.",
      },
      cloud: {
        title: "Cloud & delivery",
        description:
          "CI/CD pipelines, containerised environments and deployment workflows — Docker, Kubernetes, Argo CD and Azure.",
      },
      architecture: {
        title: "System architecture",
        description:
          "Modular monoliths, microservices, asynchronous messaging (Kafka, RabbitMQ) and pragmatic architectural decisions.",
      },
      ml: {
        title: "Machine learning",
        description:
          "Classification, neural networks and data analysis in Python — currently mostly applied to logs, failures and observability.",
      },
    },
    facts: [
      { value: "4.52", label: "final GPA, B.Eng. in Computer Science (TUL)" },
      { value: "4.90", label: "first-semester GPA, Master's programme" },
      { value: "AZ-900", label: "Microsoft Certified: Azure Fundamentals" },
      { value: "1st DAN", label: "karate black belt, ~15 years of training" },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Polish", level: "native", value: 100 },
      { name: "English", level: "C1", value: 85 },
      { name: "Spanish", level: "A2", value: 35 },
    ],
  },
  experience: {
    badge: "Experience",
    title: "Building software in real-world environments.",
    description:
      "My experience spans backend development, DevOps, test automation and technical education — from a CRM product, through fintech, to banking.",
    currentCompany: "Current company",
    currentRole: "Current role",
    careerProgression: "Career progression",
    present: "Present",
    workModes: { hybrid: "Hybrid", remote: "Remote", onsite: "On-site" },
    ctaTitle: "Interested in working together?",
    ctaDescription: "I'm open to discussing ambitious backend, cloud and DevOps opportunities.",
    contact: "Get in touch",
    companies: {
      ing: {
        location: "Katowice",
        description:
          "Progressed from a test automation internship into a Junior DevOps Engineer position, working on enterprise software and delivery processes in a regulated banking environment.",
        roles: {
          devops: {
            title: "Junior DevOps Engineer",
            responsibilities: [
              "Supporting and improving CI/CD pipelines and automated deployment processes",
              "Working with Java-based applications and their delivery environments",
              "Supporting cloud infrastructure and application environments in Azure",
              "Investigating issues across build, deployment and runtime workflows",
              "Collaborating with developers, DevOps engineers and platform teams",
            ],
          },
          intern: {
            title: "Java QA Automation Intern",
            responsibilities: [
              "Developed and maintained test automation in Java 17 (JUnit 5, Selenide, Selenium)",
              "Automated API testing with REST Assured",
              "Investigated failed tests and application defects, including log analysis in Kibana",
              "Worked with Azure DevOps pipelines and automated test execution environments",
              "Collaborated with developers and quality engineering teams",
            ],
          },
        },
      },
      fairPlace: {
        location: "Łódź",
        description:
          "Developed backend components for a microservice-based financial platform, focusing on GraphQL gateways, trading integrations and event-driven communication.",
        roles: {
          backend: {
            title: "Java Backend Developer",
            responsibilities: [
              "Developed and maintained microservice-based backend components using Java 21 and Spring Boot",
              "Implemented GraphQL APIs for back-office and internal gateway services",
              "Integrated the GraphQL gateway layer with downstream REST-based microservices",
              "Implemented and refactored FIX protocol integrations for order management and market connectors",
              "Designed domain models and mapping logic between OMS components and external broker APIs",
              "Created and maintained unit and integration tests using Spock and JUnit",
              "Collaborated with DevOps engineers on GitLab CI/CD, Docker, Kubernetes and Argo CD deployments",
            ],
          },
        },
      },
      firmao: {
        location: "Łódź",
        description:
          "Developed and maintained features in a mature commercial CRM platform, working across Java backend services, database logic and an Ext JS frontend.",
        roles: {
          fullstack: {
            title: "Junior Fullstack Java Developer",
            responsibilities: [
              "Implemented backend and frontend features in a production CRM system",
              "Fixed defects and investigated regressions in existing functionality",
              "Worked with Java, Hibernate, PostgreSQL and Ext JS",
              "Modified reports, application configuration and business logic",
              "Participated in code reviews and Jenkins-based build processes",
              "Analyzed automated test failures and production-oriented issues",
            ],
          },
        },
      },
      giganci: {
        location: "Łódź",
        description:
          "Taught programming fundamentals to children and teenagers, combining technical instruction with mentoring and practical project work.",
        roles: {
          instructor: {
            title: "Programming Instructor",
            responsibilities: [
              "Conducted programming courses and practical workshops",
              "Taught Python, C++ and C# fundamentals",
              "Explained algorithms and programming concepts at different experience levels",
              "Supported students while building their own applications and games",
              "Adapted lesson plans and exercises to individual learning needs",
            ],
          },
        },
      },
    },
  },
  skills: {
    badge: "Skills",
    title: "A tech stack backed by practice.",
    description:
      "Technologies I've used commercially, at university and in projects. Highlighted items were used in professional roles — the rest come from projects and study.",
    commercial: "Used commercially",
    commercialShort: "commercial",
    filterLabel: "Show",
    filterAll: "All",
    filterCommercial: "Commercial only",
  },
  projects: {
    badge: "Selected projects",
    title: "Systems built to solve real problems.",
    description:
      "Projects covering backend development, distributed architecture, machine learning and full-stack delivery. Each one links to its source code.",
    viewRepositories: "View all repositories",
    viewRepository: "Repository",
    frontendRepository: "Frontend",
    engineeringHighlights: "Engineering highlights",
    architecture: "Flow / architecture",
    filterLabel: "Filter projects",
    filters: { all: "All", backend: "Backend", ml: "ML & AI", devops: "DevOps", fullstack: "Full-stack" },
    status: {
      thesis: "Engineering thesis",
      team: "Team project",
      research: "R&D — data acquisition",
      personal: "Personal project",
      course: "Academic project",
    },
    showing: "Projects shown:",
    moreTitle: "More on GitHub",
    moreDescription: "Smaller projects from AI and ML courses — implementations from scratch.",
    more: {
      cnn: "Convolutional neural network with pooling layers",
      fuzzy: "Fuzzy-logic paddle controller for Pong (scikit-fuzzy)",
      pacman: "Classical graph search algorithms — UC Berkeley Pacman AI",
      multiAgent: "Adversarial search: minimax, alpha-beta, expectimax",
    },
    projects: {
      karate: {
        eyebrow: "Microservices platform",
        description:
          "A platform for managing karate clubs: training sessions, enrolments, payments, feedback and automated notifications. The subject of my engineering thesis, defended on 10 February 2026 (supervisor: Dr. Eng. Rafał Kotas).",
        highlights: [
          "Evolved from a modular monolith into a microservices architecture (Spring Cloud)",
          "API Gateway, Eureka and centralised configuration (Spring Cloud Config)",
          "Event-driven communication with Apache Kafka and RabbitMQ",
          "Database-per-service PostgreSQL with Flyway migrations",
          "JWT authentication and role-based access control",
          "PayPal payments and automated email notifications",
          "Jenkins CI/CD with automated testing and deployments",
        ],
        flow: [["React"], ["API Gateway", "Eureka", "Config Server"], ["Users", "Trainings", "Payments", "Notifications"], ["Kafka", "PostgreSQL"]],
      },
      aiLogs: {
        eyebrow: "Machine learning for DevOps",
        description:
          "Classifies raw application and infrastructure logs into DATABASE, KAFKA, DOCKER, MEMORY, NETWORK and SECURITY categories to speed up incident triage.",
        highlights: [
          "TF-IDF vectorisation of log text",
          "Logistic regression model (scikit-learn)",
          "Data preparation and analysis with pandas",
          "Trained model serialised with Joblib",
          "Combines my interests: DevOps, monitoring and AI",
        ],
        flow: [["Raw logs"], ["pandas", "TF-IDF"], ["Logistic regression"], ["DATABASE", "KAFKA", "NETWORK", "…"]],
      },
      cityFailurePredictor: {
        eyebrow: "Machine learning platform",
        description:
          "An academic team project focused on predicting failures in urban infrastructure and supporting data-driven maintenance decisions.",
        highlights: [
          "Predictive models for urban infrastructure failures",
          "Data preprocessing and feature engineering",
          "Machine learning model training and evaluation",
          "Monitoring and logs: Prometheus, Grafana, Loki",
          "Collaborative development within a team",
        ],
        flow: [["City data"], ["Python", "Feature eng."], ["ML model"], ["Prometheus", "Grafana", "Loki"]],
      },
      jobOffers: {
        eyebrow: "Job aggregation platform",
        description:
          "A platform that collects and processes Junior Java Developer job offers from external sources and exposes them through a secure backend and React frontend.",
        highlights: [
          "Scheduled aggregation from external job sources",
          "JWT-based authentication and authorization",
          "MongoDB persistence with Redis caching",
          "Integration testing using Testcontainers and WireMock",
          "Containerized deployment on AWS",
        ],
        flow: [["External APIs"], ["Scheduler", "Spring Boot"], ["MongoDB", "Redis"], ["React"]],
      },
      traffic: {
        eyebrow: "Smart city · Geo + ML",
        description:
          "A system that estimates the current traffic-light phase in Łódź and the approximate time until it changes — before the driver reaches the intersection. Currently in the data acquisition and feasibility validation stage.",
        highlights: [
          "Identifying the upcoming intersection from GPS",
          "Geospatial data in PostgreSQL + PostGIS",
          "ML pipeline: historical observations → phase and timing prediction",
          "Explicitly signals when a reliable prediction isn't available",
          "Planned components: Spring Boot API, Android app (Kotlin)",
        ],
        flow: [["GPS"], ["Intersection", "PostGIS"], ["ML model"], ["Phase + ETA"]],
      },
      akigator: {
        eyebrow: "AI-powered full-stack application",
        description:
          "An interactive guessing game combining a Spring Boot backend, a React frontend and a Python machine learning service.",
        highlights: [
          "JWT-secured user authentication",
          "Interactive game session lifecycle management",
          "Machine learning integration through a Python service",
          "Category, question and answer management",
          "React and TypeScript user interface",
        ],
        flow: [["React"], ["Spring Boot"], ["Python ML"], ["PostgreSQL"]],
      },
      thousand: {
        eyebrow: "Online multiplayer game",
        description:
          "An online multiplayer implementation of the Polish card game Tysiąc (Thousand), built with Java 25, Spring Boot 4 and React.",
        highlights: [
          "Starts as a modular monolith",
          "Game rules as a pure Java domain model, separated from Spring",
          "Real-time communication over WebSockets",
          "Trunk-based development: short-lived branches, PRs with CI checks",
        ],
        flow: [["React"], ["WebSocket"], ["Spring Boot"], ["Game domain"]],
      },
      lotto: {
        eyebrow: "Hexagonal architecture",
        description:
          "A lottery application where users can submit tickets, view draw results and explore draw history through a clean REST API.",
        highlights: [
          "Modular monolith architecture",
          "Hexagonal architecture with clear domain boundaries",
          "Lottery draw and ticket validation workflows",
          "MongoDB persistence",
          "Automated tests and a Docker-based local development environment",
        ],
        flow: [["REST API"], ["Ports & adapters"], ["Domain"], ["MongoDB"]],
      },
    },
  },
  research: {
    badge: "Research",
    status: "Ongoing · Master's thesis",
    title: "Root cause analysis in microservice systems",
    description:
      "My area of academic research: how to locate the source of a failure in a system made of many services using telemetry — logs, metrics and traces. And how to make a model say when it is not confident in its answer.",
    topicsTitle: "Topics",
    topics: [
      "Observability: logs, metrics, traces",
      "Graph neural networks (GNNs)",
      "Large language models (LLMs)",
      "Uncertainty estimation",
      "Model calibration",
      "Selective prediction",
    ],
    dataset: "Dataset explored: the RCAEval benchmark with failure cases for evaluating RCA methods.",
  },
  education: {
    badge: "Education",
    title: "Technology and business — two degrees, one goal.",
    description:
      "Studies at Lodz University of Technology, an Erasmus+ exchange in Helsinki and certifications that structure what I've learned in practice.",
    inProgress: "In progress",
    completed: "Completed",
    university: "Lodz University of Technology",
    items: {
      msc: {
        degree: "Master's — Applied Computer Science",
        detail: "Specialisation: Software Engineering and Machine Learning",
        note: "First-semester GPA: 4.90",
        topics: ["Software engineering", "Machine learning", "Artificial intelligence", "Software architecture", "Data analysis"],
      },
      mbs: {
        degree: "Master's — Master of Business Studies",
        detail: "Business and management competencies complementing a technical profile",
        note: "Digital transformation and business applications of AI",
        topics: ["Strategic management", "Economics", "Digital transformation", "Business strategy", "AI in business"],
      },
      beng: {
        degree: "B.Eng. — Computer Science",
        detail: "Thesis: “Web Application for Karate Training Management Based on Microservices Architecture”",
        note: "GPA: 4.52 · defended 10 Feb 2026 · supervisor: Dr. Eng. Rafał Kotas",
        topics: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Docker"],
      },
      erasmus: {
        degree: "Erasmus+ — academic exchange",
        school: "Metropolia University of Applied Sciences",
        detail: "Helsinki, Finland",
        note: "Studying in an international environment",
        topics: [],
      },
    },
    certsTitle: "Certifications & development",
    statuses: { passed: "Passed", preparing: "Preparing", planned: "Planned", enrolled: "Enrolled" },
    certs: {
      az900: { name: "Microsoft Certified: Azure Fundamentals (AZ-900)", issuer: "Microsoft", date: "6 May 2026" },
      az204: { name: "Azure Developer Associate (AZ-204)", issuer: "Microsoft", date: "" },
      oracle: { name: "Java SE 25 Developer (1Z0-831)", issuer: "Oracle", date: "" },
      elementsOfAi: { name: "Elements of AI · Building AI", issuer: "ECIU · Linköping University", date: "2 × 2 ECTS" },
    },
  },
  activities: {
    badge: "Beyond code",
    title: "Discipline from the dojo, curiosity from the lab.",
    description:
      "Karate taught me consistency and continuous improvement — exactly what software engineering demands.",
    items: {
      karate: { title: "Karate — 1st DAN", text: "Around 15 years of training and a black belt. Karate also became the subject of my engineering thesis." },
      sensei: { title: "Karate instructor", text: "Teaching classes as a sensei — passing on knowledge, patience and responsibility for a group." },
      kino: { title: "KINO research club", text: "Member of the KINO student research club." },
      events: { title: "Tech events", text: "Taking part in Łódzkie Dni Informatyki and other academic and technology events." },
      business: { title: "Technology in business", text: "Digital transformation, generative AI in organisations and AI's impact on labour productivity." },
    },
  },
  footer: {
    contact: "Contact",
    title: "Let's build something worth shipping.",
    description:
      "I'm open to conversations about backend engineering, cloud infrastructure, DevOps and international software opportunities.",
    writeEmail: "Write an email",
    copyEmail: "Copy email address",
    backToTop: "Back to top",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    copyright: "All rights reserved.",
    build: "build",
    madeWith: "Astro · Tailwind CSS · PWA",
  },
  palette: {
    title: "Command palette",
    placeholder: "Type a command or section name…",
    empty: "No results",
    groups: { navigate: "Go to", actions: "Actions", links: "Links" },
    actions: {
      top: "Top of the page",
      copyEmail: "Copy email address",
      language: "Przełącz na polski",
      install: "Install as an app",
      notifications: "Enable new-version notifications",
      github: "Open GitHub",
      linkedin: "Open LinkedIn",
      email: "Write an email",
      cv: "Download CV",
    },
    hint: "↑↓ navigate · Enter select · Esc close",
  },
  client: {
    offline: "You're offline — the site is running from cache.",
    online: "Connection restored.",
    updateAvailable: "A new version of the site is available.",
    updateAction: "Refresh",
    offlineReady: "The site is ready to work offline.",
    installed: "The app has been installed.",
    installUnavailable: "You can install it from your browser menu (e.g. “Add to Home Screen”).",
    copied: "Email address copied.",
    copyFailed: "Couldn't copy — the address is: ",
    notificationsEnabled: "Notifications enabled. I'll let you know when a new version is published.",
    notificationsDenied: "Notifications are blocked in your browser settings.",
    notificationsUnsupported: "This browser doesn't support notifications.",
    notificationTitle: "Łukasz Pelikan — portfolio",
    notificationEnabledBody: "Notifications work. This is how a new-version alert will look.",
    notificationUpdateBody: "A new version of the site has been published — click to open it.",
    dismiss: "Dismiss notification",
    notificationsRegion: "Notifications",
  },
  offline: {
    title: "You're offline",
    description: "This page hasn't been saved for offline use yet. Check your connection and try again.",
    retry: "Try again",
    home: "Home page",
  },
  notFound: {
    title: "404 — page not found",
    description: "This page doesn't exist or has been moved.",
    home: "Back to the home page",
  },
};

export default en;
