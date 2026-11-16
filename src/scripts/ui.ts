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

/**
 * Fades elements marked with data-reveal in as they enter the viewport.
 * Content is visible by default: only elements that are still below the fold when
 * this runs get hidden (and then revealed on scroll). On a slow connection, where this
 * script arrives late, nothing that the visitor can already see is ever hidden.
 */
function initReveal() {
  if (!("IntersectionObserver" in window) || reducedMotion()) return;
  const fold = window.innerHeight;
  const items = [...document.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
    (el) => el.getBoundingClientRect().top > fold,
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("reveal-pending");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  items.forEach((el) => {
    el.classList.add("reveal-pending");
    observer.observe(el);
  });
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

const THEME_COLORS = { dark: "#0e1116", light: "#f6f7f9" } as const;

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

/** Wraps every word of an element's text in a span, keeping inline markup such as <em>. */
function splitWords(root: HTMLElement) {
  let index = 0;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const node of nodes) {
    const parts = node.textContent!.split(/(\s+)/);
    const fragment = document.createDocumentFragment();
    for (const part of parts) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        fragment.append(part);
        continue;
      }
      const word = document.createElement("span");
      word.className = "split-word";
      word.style.setProperty("--w", String(index++));
      word.textContent = part;
      fragment.append(word);
    }
    node.replaceWith(fragment);
  }
}

/** Headings marked data-split rise in word by word when they scroll into view. */
function initSplitHeadings() {
  if (!("IntersectionObserver" in window) || reducedMotion()) return;
  const fold = window.innerHeight;
  const headings = [...document.querySelectorAll<HTMLElement>("[data-split]")].filter(
    (el) => el.getBoundingClientRect().top > fold,
  );
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.remove("split-pending");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -10% 0px" },
  );
  headings.forEach((heading) => {
    splitWords(heading);
    heading.classList.add("split-pending");
    observer.observe(heading);
  });
}

/** Numbers marked data-count ("4", "4,90", "1 DAN") count up from zero when they appear. */
function initCountUp() {
  if (!("IntersectionObserver" in window) || reducedMotion()) return;
  const fold = window.innerHeight;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        const el = entry.target as HTMLElement;
        const { target, decimals, separator, suffix } = JSON.parse(el.dataset.countParsed!);
        const started = performance.now();
        const duration = 1300;
        const tick = (now: number) => {
          const progress = Math.min((now - started) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target * eased).toFixed(decimals).replace(".", separator) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    },
    { threshold: 0.6 },
  );
  document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
    const match = el.textContent!.trim().match(/^(\d+)(?:([.,])(\d+))?(.*)$/);
    if (!match || el.getBoundingClientRect().top <= fold) return;
    const [, whole, separator = ",", fraction = "", suffix] = match;
    const target = Number(`${whole}.${fraction || 0}`);
    el.dataset.countParsed = JSON.stringify({ target, decimals: fraction.length, separator, suffix });
    el.textContent = (0).toFixed(fraction.length).replace(".", separator) + suffix;
    observer.observe(el);
  });
}

export function initUi() {
  initShortcutHints();
  initReveal();
  initSplitHeadings();
  initCountUp();
  initScrollEffects();
  applyTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  initActions();
}
