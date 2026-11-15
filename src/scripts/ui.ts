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

/** Cursor-following glow on cards with the .spotlight class. */
function initSpotlight() {
  if (!window.matchMedia("(hover: hover)").matches) return;
  document.addEventListener(
    "pointermove",
    (event) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    },
    { passive: true },
  );
}

/** Typewriter effect for the "now:" line in the hero. */
function initRotator() {
  const el = document.querySelector<HTMLElement>("[data-rotator]");
  if (!el) return;
  const items: string[] = JSON.parse(el.dataset.rotator ?? "[]");
  if (items.length < 2) return;

  let index = 0;
  const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

  const run = async () => {
    for (;;) {
      await wait(2800);
      if (document.hidden) continue;
      const next = items[(index + 1) % items.length];
      if (reducedMotion()) {
        el.textContent = next;
      } else {
        for (let i = el.textContent!.length; i >= 0; i--) {
          el.textContent = el.textContent!.slice(0, i);
          await wait(18);
        }
        for (let i = 1; i <= next.length; i++) {
          el.textContent = next.slice(0, i);
          await wait(38);
        }
      }
      index = (index + 1) % items.length;
    }
  };
  run();
}

/** Accessible tabs (role=tablist) with arrow-key navigation. */
function initTabs() {
  document.querySelectorAll<HTMLElement>("[role=tablist]").forEach((list) => {
    const tabs = [...list.querySelectorAll<HTMLButtonElement>("[role=tab]")];
    const select = (tab: HTMLButtonElement, focus = false) => {
      for (const t of tabs) {
        const selected = t === tab;
        t.setAttribute("aria-selected", String(selected));
        t.tabIndex = selected ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")!)?.toggleAttribute("hidden", !selected);
      }
      if (focus) tab.focus();
    };
    list.addEventListener("click", (event) => {
      const tab = (event.target as Element).closest<HTMLButtonElement>("[role=tab]");
      if (tab) select(tab);
    });
    list.addEventListener("keydown", (event) => {
      const current = tabs.indexOf(document.activeElement as HTMLButtonElement);
      if (current < 0) return;
      const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (event.key === "Home") select(tabs[0], true);
      else if (event.key === "End") select(tabs[tabs.length - 1], true);
      else if (delta) select(tabs[(current + delta + tabs.length) % tabs.length], true);
      else return;
      event.preventDefault();
    });
  });
}

/** Toggle-button filters: [data-filter-group] > button[data-filter], items carry data-tags. */
function initFilters() {
  document.querySelectorAll<HTMLElement>("[data-filter-group]").forEach((group) => {
    const target = document.getElementById(group.dataset.filterGroup!);
    const counter = group.dataset.filterCount ? document.getElementById(group.dataset.filterCount) : null;
    if (!target) return;
    const buttons = [...group.querySelectorAll<HTMLButtonElement>("button[data-filter]")];

    group.addEventListener("click", (event) => {
      const button = (event.target as Element).closest<HTMLButtonElement>("button[data-filter]");
      if (!button) return;
      const filter = button.dataset.filter!;
      buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

      let shown = 0;
      target.querySelectorAll<HTMLElement>("[data-tags]").forEach((item) => {
        const match = filter === "all" || item.dataset.tags!.split(" ").includes(filter);
        item.hidden = !match;
        if (match) {
          shown++;
          item.classList.add("is-visible");
        }
      });
      if (counter) counter.textContent = String(shown);
    });
  });
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
  initSpotlight();
  initRotator();
  initTabs();
  initFilters();
  initActions();
}
