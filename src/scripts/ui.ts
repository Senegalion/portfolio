import { strings } from "./client-i18n";
import { enableNotifications, installApp } from "./pwa";
import { toast } from "./toast";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export async function copyEmail(email: string) {
  const s = strings();
  try {
    await navigator.clipboard.writeText(email);
    toast(s.copied, { type: "success", id: "copy" });
  } catch {
    toast(s.copyFailed + email, { type: "info", id: "copy" });
  }
}

/** Fades elements marked with data-reveal in as they enter the viewport. */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!("IntersectionObserver" in window) || reducedMotion()) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  items.forEach((el) => observer.observe(el));
}

/** Scroll progress bar, header shadow and floating back-to-top button. */
function initScrollEffects() {
  const bar = document.getElementById("scroll-progress");
  const header = document.getElementById("site-header");
  const backToTop = document.getElementById("back-to-top");
  let ticking = false;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const y = window.scrollY;
    bar?.style.setProperty("transform", `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`);
    header?.toggleAttribute("data-scrolled", y > 8);
    if (backToTop) {
      const show = y > 900;
      backToTop.toggleAttribute("data-visible", show);
      backToTop.tabIndex = show ? 0 : -1;
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/** Highlights the navigation link of the section currently in view. */
function initActiveNav() {
  const links = [...document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")];
  const ids = [...new Set(links.map((link) => link.hash.slice(1)))];
  const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
  if (!sections.length || !("IntersectionObserver" in window)) return;

  const setActive = (id: string) => {
    for (const link of links) {
      const active = link.hash === `#${id}`;
      link.toggleAttribute("data-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    }
  };

  const visible = new Map<string, number>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
      const [best] = [...visible.entries()].sort((a, b) => b[1] - a[1]);
      if (best && best[1] > 0) setActive(best[0]);
      else if (window.scrollY < 200) setActive("");
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
  );
  sections.forEach((section) => observer.observe(section));
}

const THEME_COLORS = { dark: "#0f0e0c", light: "#f3efe7" } as const;

/** Applies the theme to <html>, the theme-color meta tag and the toggle buttons. */
function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement;
  root.dataset.theme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  document.querySelectorAll<HTMLElement>('[data-action="toggle-theme"]').forEach((button) => {
    const label = theme === "dark" ? button.dataset.labelLight : button.dataset.labelDark;
    if (!label) return;
    button.setAttribute("aria-label", label);
    button.title = label;
  });
}

export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  if (!reducedMotion()) {
    root.classList.add("theme-transition");
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  }
  applyTheme(next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* private mode — the choice simply isn't remembered */
  }
}

/** Delegated handlers for [data-action] buttons used across the page. */
function initActions() {
  document.addEventListener("click", (event) => {
    const el = (event.target as Element | null)?.closest<HTMLElement>("[data-action]");
    if (!el) return;
    switch (el.dataset.action) {
      case "copy-email":
        copyEmail(el.dataset.email ?? "");
        break;
      case "install":
        installApp();
        break;
      case "notifications":
        enableNotifications();
        break;
      case "toggle-theme":
        toggleTheme();
        break;
      case "back-to-top":
        window.scrollTo({ top: 0, behavior: reducedMotion() ? "auto" : "smooth" });
        break;
    }
  });

  // Keep the current section when switching language.
  document.querySelectorAll<HTMLAnchorElement>("[data-lang-link]").forEach((link) => {
    link.addEventListener("click", () => {
      if (location.hash) link.hash = location.hash;
    });
  });
}

/** Shows "Ctrl K" instead of "⌘K" outside Apple platforms. */
function initShortcutHints() {
  const isApple = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
  if (isApple) return;
  document.querySelectorAll<HTMLElement>("[data-mod-key]").forEach((el) => {
    el.textContent = el.textContent!.replace("⌘", "Ctrl ");
  });
}

export function initUi() {
  initShortcutHints();
  initReveal();
  initScrollEffects();
  initActiveNav();
  applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  initActions();
}
