/* Service worker template — processed by integrations/pwa.mjs at build time. */
/* eslint-disable no-restricted-globals */

const VERSION = "__SW_VERSION__";
const PRECACHE = `precache-${VERSION}`;
const RUNTIME = `runtime-${VERSION}`;
const OFFLINE_URL = "/offline/";
const PRECACHE_URLS = __SW_PRECACHE__;

// Install: download the full new version into a fresh, versioned cache.
// We do NOT call skipWaiting() here — the page asks the user first, so a tab
// that is still running the old HTML never gets new code swapped underneath it.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(PRECACHE)
      .then((cache) =>
        cache.addAll(PRECACHE_URLS.map((url) => new Request(url, { cache: "reload" }))),
      ),
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") self.skipWaiting();
  if (event.data?.type === "GET_VERSION") {
    event.source?.postMessage({ type: "VERSION", version: VERSION });
  }
});

// Activate: remove caches that belong to previous versions.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== PRECACHE && key !== RUNTIME).map((key) => caches.delete(key)),
      );
      if (self.registration.navigationPreload) {
        await self.registration.navigationPreload.enable();
      }
      await self.clients.claim();
    })(),
  );
});

async function fromCache(request) {
  return (
    (await caches.match(request, { ignoreSearch: true })) ??
    (await caches.match(new URL(request.url).pathname.replace(/\/?$/, "/")))
  );
}

// HTML: network first, so a new deployment is visible immediately when online.
async function handleNavigation(event) {
  try {
    const preloaded = await event.preloadResponse;
    const response = preloaded ?? (await fetch(event.request));
    if (response.ok) {
      const copy = response.clone();
      caches.open(RUNTIME).then((cache) => cache.put(event.request, copy));
    }
    return response;
  } catch {
    return (await fromCache(event.request)) ?? (await caches.match(OFFLINE_URL)) ?? Response.error();
  }
}

// Hashed build assets (/_astro/*) never change — cache first.
async function handleImmutable(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(RUNTIME);
    cache.put(request, response.clone());
  }
  return response;
}

// Everything else from this origin: stale-while-revalidate.
async function handleStatic(event) {
  const cached = await caches.match(event.request, { ignoreSearch: true });
  const network = fetch(event.request)
    .then(async (response) => {
      if (response.ok) {
        const cache = await caches.open(RUNTIME);
        await cache.put(event.request, response.clone());
      }
      return response;
    })
    .catch(() => cached ?? Response.error());

  if (cached) {
    event.waitUntil(network.catch(() => undefined));
    return cached;
  }
  return network;
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js" || url.pathname === "/version.json") return;

  if (request.mode === "navigate") {
    event.respondWith(handleNavigation(event));
  } else if (url.pathname.startsWith("/_astro/")) {
    event.respondWith(handleImmutable(request));
  } else {
    event.respondWith(handleStatic(event));
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const windows = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      const target = windows[0];
      if (target) return target.focus();
      return self.clients.openWindow(event.notification.data?.url ?? "/");
    })(),
  );
});
