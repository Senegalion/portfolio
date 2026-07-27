const en = {
  navigation: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    contactButton: "Contact",
    mobileContact: "Contact me",
    home: "Go to homepage",
    openMenu: "Open navigation",
    closeMenu: "Close navigation",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
  },
  hero: {
    badge: "Software Engineer · Java & DevOps",
    title: "I build backend systems and ",
    titleHighlight: "the infrastructure behind them.",
    description: "I'm Łukasz, a software engineer focused on Java, cloud platforms, delivery automation and dependable distributed systems.",
    explore: "Explore my work",
    github: "View GitHub",
    location: "Łódź, Poland",
    availability: "Open to international opportunities",
    profileFile: "engineer.profile",
    classKeyword: "public class",
    className: "Engineer",
    stringKeyword: "private final String",
    listKeyword: "private final List<String>",
    nameLabel: "name",
    roleLabel: "role",
    focusLabel: "focus",
    name: "Łukasz Pelikan",
    role: "Software Engineer",
    backend: "Backend",
    cloud: "Cloud",
    devops: "DevOps",
    backendDescription: "Java & Spring",
    cloudDescription: "Azure & AWS",
    delivery: "Delivery",
    deliveryDescription: "CI/CD & Docker",
  },
  about: {
    badge: "About me",
    title: "Engineering beyond writing code.",
    paragraph1:
      "I'm a software engineer working at the intersection of backend development, cloud infrastructure and DevOps.",
    paragraph2:
      "My core stack is Java and Spring Boot, but I'm equally interested in how software is tested, delivered, monitored and operated after it leaves a developer's machine.",
    paragraph3:
      "I currently work in the banking industry, where reliability, security and disciplined engineering matter more than impressive demos.",
    contact: "Let's talk",
    areas: {
      backend: {
        title: "Backend engineering",
        description:
          "Designing maintainable services and APIs with Java, Spring Boot, relational databases and automated tests.",
      },
      cloud: {
        title: "Cloud & delivery",
        description:
          "Building CI/CD pipelines, containerized environments and dependable deployment workflows across cloud platforms.",
      },
      architecture: {
        title: "System architecture",
        description:
          "Exploring modular systems, messaging, distributed communication and pragmatic architectural decisions.",
      },
      reliability: {
        title: "Reliable software",
        description:
          "Focusing on observability, security, testing and operational stability rather than code that only works locally.",
      },
    },
    facts: {
      master:
        "Applied Computer Science (Software Engineering and Machine Learning)",
      bachelor: "Computer Science",
      java: "Primary engineering language",
      cloud: "Azure and AWS experience",
    },
  },
  experience: {
    badge: "Experience",
    title: "Building software in real-world environments.",
    description:
      "My experience spans backend development, DevOps, cloud infrastructure and technical education — from product development to regulated enterprise systems.",
    currentCompany: "Current company",
    currentRole: "Current role",
    careerProgression: "Career progression",
    ctaTitle: "Interested in working together?",
    ctaDescription:
      "I'm open to discussing ambitious backend, cloud and DevOps opportunities.",
    contact: "Get in touch",
    companies: {
      ing: {
        description:
          "Progressed from a Java Automation Intern role into a Junior DevOps Engineer position, working on enterprise software and delivery processes in a regulated banking environment.",
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
            title: "Java Automation Intern",
            responsibilities: [
              "Developed and maintained Java-based test automation",
              "Supported automated verification of enterprise banking applications",
              "Investigated failed tests and defects in application workflows",
              "Worked with CI/CD processes and automated execution environments",
              "Collaborated with developers and quality engineering teams",
            ],
          },
        },
      },
      fairPlace: {
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
  projects: {
    badge: "Selected Projects",
    title: "Systems built to solve real problems.",
    description:
      "A selection of projects covering backend development, cloud deployment, testing, software architecture and full-stack product delivery.",
    viewRepositories: "View all repositories",
    viewRepository: "View repository",
    engineeringHighlights: "Engineering highlights",
    projects: {
      karate: {
        eyebrow: "Microservices Platform",
        description:
          "A comprehensive platform for managing karate clubs, training sessions, enrollments, payments, feedback and automated notifications.",
        highlights: [
          "Spring Cloud microservices architecture",
          "API Gateway, Eureka and centralized configuration",
          "Event-driven communication with Apache Kafka",
          "JWT authentication and role-based access control",
          "PayPal payments and automated email notifications",
          "Jenkins CI/CD with automated testing and deployments",
        ],
      },
      cityFailurePredictor: {
        eyebrow: "Machine Learning Platform",
        description:
          "A collaborative machine learning project focused on predicting failures in urban infrastructure and supporting data-driven maintenance decisions.",
        highlights: [
          "Predictive models for urban infrastructure failures",
          "Data preprocessing and feature engineering",
          "Machine learning model training and evaluation",
          "Collaborative development within a multidisciplinary team",
          "Backend integration with data-processing pipelines",
        ],
      },
      jobOffers: {
        eyebrow: "Job Aggregation Platform",
        description:
          "A platform that collects and processes Junior Java Developer job offers from external sources and exposes them through a secure backend and React frontend.",
        highlights: [
          "Scheduled aggregation from external job sources",
          "JWT-based authentication and authorization",
          "MongoDB persistence with Redis caching",
          "Integration testing using Testcontainers and WireMock",
          "Containerized deployment on AWS",
        ],
      },
      akigator: {
        eyebrow: "AI-Powered Full-Stack Application",
        description:
          "An interactive guessing game inspired by Akinator, combining a Spring Boot backend, React frontend and a machine learning service.",
        highlights: [
          "JWT-secured user authentication",
          "Interactive game session lifecycle management",
          "Machine learning integration through a Python service",
          "Category, question and answer management",
          "React and TypeScript user interface",
        ],
      },
      lotto: {
        eyebrow: "Hexagonal Architecture",
        description:
          "A scalable lottery application where users can submit tickets, view draw results and explore draw history through a clean REST API.",
        highlights: [
          "Modular monolith architecture",
          "Hexagonal architecture with clear domain boundaries",
          "Lottery draw and ticket validation workflows",
          "MongoDB persistence",
          "Automated tests and a Docker-based local development environment",
        ],
      },
    },
  },
  footer: {
    contact: "Contact",
    title: "Let's build something worth shipping.",
    description:
      "I'm open to conversations about backend engineering, cloud infrastructure, DevOps and international software opportunities.",
    backToTop: "Back to top",
    github: "GitHub profile",
    linkedin: "LinkedIn profile",
    copyright: "All rights reserved.",
  },
};

export default en;