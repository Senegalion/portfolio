const pl = {
  navigation: {
    about: "O mnie",
    experience: "Doświadczenie",
    projects: "Projekty",
    contact: "Kontakt",
    contactButton: "Kontakt",
    mobileContact: "Skontaktuj się",
    home: "Przejdź do strony głównej",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    mainNavigation: "Nawigacja główna",
    mobileNavigation: "Nawigacja mobilna",
  },
  hero: {
    badge: "Software Engineer · Java i DevOps",
    title: "Tworzę systemy backendowe oraz ",
    titleHighlight: "infrastrukturę, która za nimi stoi.",
    description: "Jestem Łukasz, inżynier specjalizujący się w Javie, rozwiązaniach chmurowych, automatyzacji dostarczania oraz niezawodnych systemach rozproszonych.",
    explore: "Zobacz moje projekty",
    github: "Zobacz GitHub",
    location: "Łódź, Polska",
    availability: "Otwarty na międzynarodowe możliwości",
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
    cloud: "Chmura",
    devops: "DevOps",
    backendDescription: "Java i Spring",
    cloudDescription: "Azure i AWS",
    delivery: "Dostarczanie",
    deliveryDescription: "CI/CD i Docker",
  },
  about: {
    badge: "O mnie",
    title: "Inżynieria to coś więcej niż pisanie kodu.",
    paragraph1:
      "Jestem inżynierem pracującym na styku backendu, infrastruktury chmurowej i DevOps.",
    paragraph2:
      "Moim głównym stackiem jest Java oraz Spring Boot, ale równie mocno interesuje mnie sposób testowania, wdrażania, monitorowania i utrzymywania oprogramowania po jego uruchomieniu.",
    paragraph3:
      "Obecnie pracuję w sektorze bankowym, gdzie niezawodność, bezpieczeństwo i zdyscyplinowane podejście do inżynierii są ważniejsze niż efektowne demonstracje.",
    contact: "Porozmawiajmy",
    areas: {
      backend: {
        title: "Backend",
        description:
          "Projektowanie usług i API z wykorzystaniem Javy, Spring Boot, relacyjnych baz danych oraz testów automatycznych.",
      },
      cloud: {
        title: "Chmura i wdrożenia",
        description:
          "Budowanie potoków CI/CD, środowisk kontenerowych oraz niezawodnych procesów wdrożeniowych w chmurze.",
      },
      architecture: {
        title: "Architektura systemów",
        description:
          "Projektowanie systemów modułowych, komunikacji asynchronicznej i praktycznych rozwiązań architektonicznych.",
      },
      reliability: {
        title: "Niezawodne oprogramowanie",
        description:
          "Skupienie na obserwowalności, bezpieczeństwie, testach oraz stabilności działania systemów.",
      },
    },
    facts: {
      master: "Informatyka Stosowana (Inżynieria Oprogramowania i Uczenie Maszynowe)",
      bachelor: "Computer Science",
      java: "Główny język programowania",
      cloud: "Doświadczenie z Azure i AWS",
    },
  },
  experience: {
    badge: "Doświadczenie",
    title: "Tworzę oprogramowanie w rzeczywistych środowiskach biznesowych.",
    description:
      "Moje doświadczenie obejmuje rozwój backendu, DevOps, infrastrukturę chmurową oraz edukację programistyczną — od tworzenia produktów po systemy klasy enterprise w sektorze regulowanym.",
    currentCompany: "Obecna firma",
    currentRole: "Obecne stanowisko",
    careerProgression: "Rozwój kariery",
    ctaTitle: "Zainteresowany współpracą?",
    ctaDescription:
      "Jestem otwarty na rozmowy dotyczące ambitnych projektów backendowych, chmurowych oraz DevOps.",
    contact: "Skontaktuj się",
    companies: {
      ing: {
        description:
          "Rozwój od stanowiska Java Automation Intern do Junior DevOps Engineer, praca nad oprogramowaniem klasy enterprise oraz procesami dostarczania w regulowanym środowisku bankowym.",
        roles: {
          devops: {
            title: "Junior DevOps Engineer",
            responsibilities: [
              "Wsparcie i rozwój potoków CI/CD oraz procesów automatycznego wdrażania",
              "Praca z aplikacjami opartymi o Javę oraz środowiskami ich uruchamiania",
              "Wsparcie infrastruktury chmurowej oraz środowisk aplikacyjnych w Azure",
              "Analiza problemów związanych z budowaniem, wdrażaniem i działaniem aplikacji",
              "Współpraca z programistami, inżynierami DevOps oraz zespołami platformowymi",
            ],
          },
          intern: {
            title: "Java Automation Intern",
            responsibilities: [
              "Tworzenie i rozwój testów automatycznych w Javie",
              "Wsparcie automatycznej weryfikacji aplikacji bankowych klasy enterprise",
              "Analiza nieudanych testów oraz błędów w działaniu aplikacji",
              "Praca z procesami CI/CD i środowiskami automatycznego uruchamiania testów",
              "Współpraca z programistami oraz zespołami Quality Engineering",
            ],
          },
        },
      },
      fairPlace: {
        description:
          "Rozwój komponentów backendowych platformy finansowej opartej na mikroserwisach, ze szczególnym uwzględnieniem GraphQL Gateway, integracji giełdowych oraz komunikacji zdarzeniowej.",
        roles: {
          backend: {
            title: "Java Backend Developer",
            responsibilities: [
              "Tworzenie i rozwój komponentów backendowych opartych o mikroserwisy z wykorzystaniem Java 21 oraz Spring Boot",
              "Implementacja interfejsów GraphQL dla usług back-office oraz wewnętrznych gatewayów",
              "Integracja warstwy GraphQL z mikroserwisami REST",
              "Implementacja oraz refaktoryzacja integracji opartych o protokół FIX dla systemów OMS i konektorów rynkowych",
              "Projektowanie modeli domenowych oraz logiki mapowania pomiędzy komponentami OMS i zewnętrznymi API brokerów",
              "Tworzenie oraz utrzymywanie testów jednostkowych i integracyjnych z wykorzystaniem Spock oraz JUnit",
              "Współpraca z zespołem DevOps przy wdrożeniach GitLab CI/CD, Docker, Kubernetes oraz Argo CD",
            ],
          },
        },
      },
      firmao: {
        description:
          "Rozwój oraz utrzymanie funkcjonalności komercyjnego systemu CRM, obejmujących backend w Javie, logikę bazodanową oraz frontend oparty o Ext JS.",
        roles: {
          fullstack: {
            title: "Junior Fullstack Java Developer",
            responsibilities: [
              "Implementacja funkcjonalności backendowych i frontendowych w produkcyjnym systemie CRM",
              "Naprawa błędów oraz analiza regresji istniejących funkcjonalności",
              "Praca z Java, Hibernate, PostgreSQL oraz Ext JS",
              "Modyfikacja raportów, konfiguracji aplikacji oraz logiki biznesowej",
              "Udział w code review oraz procesach budowania opartych o Jenkins",
              "Analiza nieudanych testów automatycznych oraz problemów produkcyjnych",
            ],
          },
        },
      },
      giganci: {
        description:
          "Prowadzenie zajęć z programowania dla dzieci i młodzieży, łączące naukę technologii z mentoringiem oraz realizacją praktycznych projektów.",
        roles: {
          instructor: {
            title: "Instruktor Programowania",
            responsibilities: [
              "Prowadzenie kursów programowania oraz warsztatów praktycznych",
              "Nauczanie podstaw języków Python, C++ oraz C#",
              "Wyjaśnianie algorytmów i zagadnień programistycznych na różnych poziomach zaawansowania",
              "Wsparcie uczniów podczas tworzenia własnych aplikacji oraz gier",
              "Dostosowywanie planów zajęć i ćwiczeń do indywidualnych potrzeb uczestników",
            ],
          },
        },
      },
    },
  },
  projects: {
    badge: "Wybrane projekty",
    title: "Systemy stworzone do rozwiązywania rzeczywistych problemów.",
    description:
      "Wybrane projekty obejmujące rozwój backendu, wdrożenia chmurowe, testowanie, architekturę oraz dostarczanie kompletnych aplikacji.",
    viewRepositories: "Zobacz wszystkie repozytoria",
    viewRepository: "Zobacz repozytorium",
    engineeringHighlights: "Najważniejsze aspekty techniczne",
    projects: {
      karate: {
        eyebrow: "Platforma mikroserwisowa",
        description:
          "Kompleksowa platforma do zarządzania klubami karate, treningami, zapisami, płatnościami, opiniami oraz automatycznymi powiadomieniami.",
        highlights: [
          "Architektura mikroserwisowa oparta o Spring Cloud",
          "API Gateway, Eureka oraz scentralizowana konfiguracja",
          "Komunikacja zdarzeniowa z wykorzystaniem Apache Kafka",
          "Uwierzytelnianie JWT oraz kontrola dostępu oparta o role",
          "Płatności PayPal oraz automatyczne powiadomienia e-mail",
          "Jenkins CI/CD z automatycznymi testami i wdrożeniami",
        ],
      },
      cityFailurePredictor: {
        eyebrow: "Platforma uczenia maszynowego",
        description:
          "Zespołowy projekt z zakresu uczenia maszynowego skupiający się na przewidywaniu awarii infrastruktury miejskiej oraz wspieraniu decyzji dotyczących utrzymania.",
        highlights: [
          "Modele predykcyjne dla awarii infrastruktury miejskiej",
          "Przygotowanie danych i inżynieria cech",
          "Trenowanie oraz ewaluacja modeli uczenia maszynowego",
          "Praca zespołowa nad wspólnym projektem",
          "Integracja backendu z przetwarzaniem danych",
        ],
      },
      jobOffers: {
        eyebrow: "Platforma agregująca oferty pracy",
        description:
          "Platforma zbierająca i przetwarzająca oferty pracy dla Junior Java Developerów z zewnętrznych źródeł, udostępniana poprzez zabezpieczony backend oraz frontend React.",
        highlights: [
          "Automatyczne pobieranie ofert z zewnętrznych źródeł",
          "Uwierzytelnianie i autoryzacja oparte o JWT",
          "Przechowywanie danych w MongoDB oraz cache Redis",
          "Testy integracyjne z wykorzystaniem Testcontainers i WireMock",
          "Konteneryzowane wdrożenie w środowisku AWS",
        ],
      },
      akigator: {
        eyebrow: "Aplikacja Full Stack wspierana przez AI",
        description:
          "Interaktywna gra inspirowana Akinatorem, łącząca backend Spring Boot, frontend React oraz usługę uczenia maszynowego.",
        highlights: [
          "Bezpieczne uwierzytelnianie użytkowników z wykorzystaniem JWT",
          "Obsługa pełnego cyklu życia rozgrywki",
          "Integracja z usługą uczenia maszynowego napisaną w Pythonie",
          "Zarządzanie kategoriami, pytaniami i odpowiedziami",
          "Interfejs użytkownika oparty o React i TypeScript",
        ],
      },
      lotto: {
        eyebrow: "Architektura heksagonalna",
        description:
          "Skalowalna aplikacja loteryjna umożliwiająca wysyłanie kuponów, przeglądanie wyników losowań oraz historii poprzez przejrzyste REST API.",
        highlights: [
          "Modularny monolit",
          "Architektura heksagonalna i wyraźny podział domen",
          "Obsługa losowań oraz walidacji kuponów",
          "Persistencja danych w MongoDB",
          "Automatyczne testy oraz lokalne środowisko Docker",
        ],
      },
    },
  },
  footer: {
    contact: "Kontakt",
    title: "Stwórzmy coś, co warto wdrożyć.",
    description:
      "Jestem otwarty na rozmowy dotyczące backendu, infrastruktury chmurowej, DevOps oraz międzynarodowych projektów programistycznych.",
    backToTop: "Powrót na górę",
    github: "Profil GitHub",
    linkedin: "Profil LinkedIn",
    copyright: "Wszelkie prawa zastrzeżone.",
  },
};

export default pl;