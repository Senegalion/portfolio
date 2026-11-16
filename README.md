# Łukasz Pelikan — portfolio

Personal portfolio built with **Astro 7**, **Tailwind CSS 4** and a hand-written **PWA** layer.
Live: https://portfolio-omega-opal-16.vercel.app

## Features

- **Bilingual** (PL default at `/`, EN at `/en/`) with `hreflang`, canonical URLs, Open Graph image and JSON-LD `Person` schema.
- **Dark / light theme** — dark by default, toggle in the header (and in the command palette); the choice is stored in `localStorage` and applied before first paint.
- **Plain-language first** — every section leads with copy a non-technical reader understands; technical details (responsibilities, stacks, architecture) sit in expandable panels.
- **Command palette** — `⌘K` / `Ctrl+K` / `/`: jump to sections, copy email, switch language, install the app, enable notifications.
- **Notifications** — in-app toasts (offline/online, copied email, new version, offline-ready) and opt-in system notifications about new versions.
- **PWA** — web manifest with icons and shortcuts, installable, works offline (`/offline/` fallback page).
- **Safe updates** — see below.
- Project filters, skill filter (“used commercially”), tabbed hero card, architecture flow diagrams, scroll progress, active-section navigation, reveal-on-scroll, back-to-top.
- Technology logos are vendored into `public/tech/` from [devicon](https://devicon.dev) (MIT) and [simple-icons](https://simpleicons.org) (CC0); tools without a freely licensed logo use neutral line icons (Lucide, ISC).
- Optional assets: put `profile.jpg|png|webp` into `src/assets/` (portrait, optimised automatically) and a CV at `public/cv/Lukasz_Pelikan_CV.pdf` (download buttons appear automatically).

## How updates work

`integrations/pwa.mjs` generates `dist/sw.js` from `src/pwa/sw.template.js` after every build.
The worker version is a **content hash** of all precached files:

1. Unchanged build → same worker → no update prompt.
2. New deployment → the browser finds a new worker, which installs into a new versioned cache while the old version keeps serving the open tab.
3. The page shows a toast “A new version is available — Refresh” (plus a system notification if the tab is hidden and notifications were enabled).
4. On click the new worker activates (`SKIP_WAITING`), deletes old caches, and every open tab reloads once — HTML and hashed assets always come from the same version.

HTML is fetched network-first (a fresh deployment is visible immediately when online); `/_astro/*` hashed assets are cache-first. `vercel.json` serves `sw.js` with `no-cache`.

## Commands

| Command           | Action                                                      |
| :---------------- | :---------------------------------------------------------- |
| `npm install`     | Install dependencies                                        |
| `npm run dev`     | Dev server at `localhost:4321` (service worker disabled)    |
| `npm run build`   | Production build to `./dist/` (+ generated service worker)  |
| `npm run preview` | Preview the build                                           |
| `npm run assets`  | Regenerate icons, `favicon.ico` and `og-image.png` from SVG |

> `astro preview` only serves files from Astro's build manifest, so `/sw.js` returns 404 there. To test the PWA locally serve `dist/` with any static server (Vercel serves the whole directory).

## Structure

```text
src/
  components/
    layout/      Header, Footer
    sections/    Hero, Intro, About, Experience, Projects, Research, Skills, Education, Activities
    ui/          Section, CommandPalette, TechChip, ProjectFlow
  data/          site constants, skills, technology logos, build info
  i18n/          pl.ts (source of truth, typed) and en.ts
  scripts/       pwa.ts, toast.ts, ui.ts (client-side behaviour)
  pwa/           service worker template
integrations/    pwa.mjs — build hook that writes sw.js
scripts/         generate-assets.mjs
```

## Lighthouse

Measured locally on a production build served with Brotli and the cache headers from `vercel.json`:

| Preset  | Performance | Accessibility | Best practices | SEO |
| :------ | :---------: | :-----------: | :------------: | :-: |
| Mobile  |     99      |      100      |      100       | 100 |
| Desktop |     100     |      100      |      100       | 100 |
