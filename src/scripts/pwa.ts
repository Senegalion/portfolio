import { strings } from "./client-i18n";
import { toast } from "./toast";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const UPDATE_CHECK_INTERVAL = 60 * 60 * 1000;
const ICON = "/icons/icon-192.png";

let installPrompt: BeforeInstallPromptEvent | null = null;
let registration: ServiceWorkerRegistration | undefined;
/** Set once this tab has seen a waiting worker; the tab then reloads when it takes over. */
let updatePending = false;
let reloading = false;
const tracked = new WeakSet<ServiceWorker>();

function promptUpdate(worker: ServiceWorker) {
  const s = strings();
  updatePending = true;

  toast(s.updateAvailable, {
    type: "update",
    id: "sw-update",
    action: {
      label: s.updateAction,
      onClick: () => worker.postMessage({ type: "SKIP_WAITING" }),
    },
  });

  // If the tab is in the background, also surface a system notification (opt-in only).
  if (document.hidden && "Notification" in window && Notification.permission === "granted") {
    registration?.showNotification(s.notificationTitle, {
      body: s.notificationUpdateBody,
      icon: ICON,
      badge: ICON,
      tag: "sw-update",
      data: { url: location.href },
    });
  }
}

function trackInstalling(worker: ServiceWorker | null) {
  if (!worker || tracked.has(worker)) return;
  tracked.add(worker);
  worker.addEventListener("statechange", () => {
    if (worker.state !== "installed") return;
    if (navigator.serviceWorker.controller) {
      promptUpdate(worker);
    }
    // First install: stay quiet — visitors don't need to know about caching.
  });
}

async function registerServiceWorker() {
  try {
    registration = await navigator.serviceWorker.register("/sw.js", { scope: "/", updateViaCache: "none" });
  } catch (error) {
    console.warn("Service worker registration failed", error);
    return;
  }

  if (registration.waiting && navigator.serviceWorker.controller) promptUpdate(registration.waiting);
  trackInstalling(registration.installing);
  registration.addEventListener("updatefound", () => trackInstalling(registration?.installing ?? null));

  // The new worker took control (after "Refresh" in this or another tab): reload
  // so the page and its assets come from the same version. A first install
  // (no previous version) does not trigger a reload.
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!updatePending || reloading) return;
    reloading = true;
    location.reload();
  });

  const checkForUpdate = () => registration?.update().catch(() => undefined);
  window.setInterval(checkForUpdate, UPDATE_CHECK_INTERVAL);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") checkForUpdate();
  });
}

export function initPwa() {
  const s = strings();

  window.addEventListener("offline", () => toast(s.offline, { type: "warning", id: "network" }));
  window.addEventListener("online", () => toast(s.online, { type: "success", id: "network" }));
  if (!navigator.onLine) toast(s.offline, { type: "warning", id: "network" });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event as BeforeInstallPromptEvent;
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    toast(s.installed, { type: "success" });
  });

  if (!("serviceWorker" in navigator) || !import.meta.env.PROD) return;

  if (document.readyState === "complete") registerServiceWorker();
  else window.addEventListener("load", registerServiceWorker, { once: true });
}

export async function installApp() {
  if (!installPrompt) {
    toast(strings().installUnavailable, { type: "info" });
    return;
  }
  await installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
}

export async function enableNotifications() {
  const s = strings();
  if (!("Notification" in window)) {
    toast(s.notificationsUnsupported, { type: "warning" });
    return;
  }

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    toast(s.notificationsDenied, { type: "warning" });
    return;
  }

  toast(s.notificationsEnabled, { type: "success" });
  const options: NotificationOptions = { body: s.notificationEnabledBody, icon: ICON, tag: "welcome" };
  const reg = registration ?? (await navigator.serviceWorker?.getRegistration());
  if (reg) await reg.showNotification(s.notificationTitle, options);
  else new Notification(s.notificationTitle, options);
}
