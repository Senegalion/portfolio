import { strings } from "./client-i18n";

export type ToastType = "info" | "success" | "warning" | "update";

export interface ToastOptions {
  type?: ToastType;
  /** Milliseconds; 0 keeps the toast until dismissed. Defaults to 5s (or sticky with an action). */
  duration?: number;
  /** Replaces an existing toast with the same id instead of stacking. */
  id?: string;
  action?: { label: string; onClick: () => void };
}

const ICONS: Record<ToastType, string> = {
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
  success: '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  warning: '<path d="M12 20h.01M8.5 16.43a5 5 0 0 1 7 0M2 8.82a15 15 0 0 1 4.17-2.65M10.66 5c4.01-.36 8.14.9 11.34 3.76M16.85 11.25a10 10 0 0 1 2.22 1.68M5 13a10 10 0 0 1 5.24-2.76M2 2l20 20"/>',
  update: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
};

const TONE: Record<ToastType, string> = {
  info: "text-sky-300 bg-sky-400/10 border-sky-400/20",
  success: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  warning: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  update: "text-brand-300 bg-brand-400/10 border-brand-400/25",
};

const MAX_TOASTS = 3;

export function toast(message: string, options: ToastOptions = {}) {
  const region = document.getElementById("toaster");
  if (!region) return { dismiss: () => undefined };

  const type = options.type ?? "info";
  if (options.id) region.querySelector(`[data-toast-id="${options.id}"]`)?.remove();

  const el = document.createElement("div");
  el.className =
    "toast pointer-events-auto flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-ink-850/95 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl";
  if (options.id) el.dataset.toastId = options.id;

  const icon = document.createElement("span");
  icon.className = `grid size-8 shrink-0 place-items-center rounded-xl border ${TONE[type]}`;
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[type]}</svg>`;

  const body = document.createElement("div");
  body.className = "min-w-0 flex-1 pt-1";
  const text = document.createElement("p");
  text.className = "text-sm leading-6 text-slate-200";
  text.textContent = message;
  body.append(text);

  const dismiss = () => {
    if (el.classList.contains("is-leaving")) return;
    el.classList.add("is-leaving");
    el.addEventListener("animationend", () => el.remove(), { once: true });
    window.setTimeout(() => el.remove(), 400);
  };

  if (options.action) {
    const { label, onClick } = options.action;
    const action = document.createElement("button");
    action.type = "button";
    action.className =
      "mt-3 inline-flex min-h-9 items-center rounded-lg bg-white px-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200";
    action.textContent = label;
    action.addEventListener("click", () => {
      onClick();
      dismiss();
    });
    body.append(action);
  }

  const close = document.createElement("button");
  close.type = "button";
  close.className = "grid size-8 shrink-0 place-items-center rounded-lg text-slate-500 transition hover:bg-white/5 hover:text-white";
  close.setAttribute("aria-label", strings().dismiss ?? "Dismiss");
  close.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  close.addEventListener("click", dismiss);

  el.append(icon, body, close);
  region.append(el);
  while (region.children.length > MAX_TOASTS) region.firstElementChild?.remove();

  const duration = options.duration ?? (options.action ? 0 : 5000);
  if (duration > 0) {
    let timer = window.setTimeout(dismiss, duration);
    el.addEventListener("mouseenter", () => window.clearTimeout(timer));
    el.addEventListener("mouseleave", () => (timer = window.setTimeout(dismiss, 2000)));
  }

  return { dismiss };
}
