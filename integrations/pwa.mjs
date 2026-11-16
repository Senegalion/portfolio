// Local Astro integration that generates the service worker after each build.
//
// The worker is built from src/pwa/sw.template.js. Its version is a content hash
// of every precached file, so an unchanged build keeps the same worker (no
// pointless update prompt), while any change to HTML, CSS, JS, fonts or images
// produces a new worker that the client offers to activate.
import { createHash } from "node:crypto";
import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PAGES = [
  "index.html",
  "o-mnie/index.html",
  "doswiadczenie/index.html",
  "projekty/index.html",
  "edukacja/index.html",
  "kontakt/index.html",
  "en/index.html",
  "en/about/index.html",
  "en/experience/index.html",
  "en/projects/index.html",
  "en/education/index.html",
  "en/contact/index.html",
  "offline/index.html",
];

const PRECACHE_PATTERNS = [
  ...PAGES.map((page) => new RegExp(`^${page.replace(/[./]/g, "\\$&")}$`)),
  /^_astro\/.+\.(css|js|woff2)$/,
  /^tech\/.+\.svg$/,
  /^logos\/.+\.(svg|webp)$/,
  /^media\/hero-poster(-portrait)?\.webp$/,
  /^icons\/.+\.png$/,
  /^favicon\.svg$/,
  /^manifest\.webmanifest$/,
];

async function walk(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(full, base) : [path.relative(base, full)];
    }),
  );
  return files.flat().map((file) => file.split(path.sep).join("/"));
}

function toUrl(file) {
  if (file === "index.html") return "/";
  if (file.endsWith("/index.html")) return `/${file.slice(0, -"index.html".length)}`;
  return `/${file}`;
}

export default function pwa() {
  return {
    name: "local:pwa",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        // Only precache build assets that the pages actually reference (e.g. skip
        // the unused React runtime chunk emitted by @astrojs/react).
        const pageSource = (await Promise.all(PAGES.map((page) => readFile(path.join(outDir, page), "utf8")))).join("\n");
        const files = (await walk(outDir))
          .filter((file) => PRECACHE_PATTERNS.some((pattern) => pattern.test(file)))
          .filter((file) => !file.startsWith("_astro/") || pageSource.includes(file.split("/").pop()))
          .sort();

        const hash = createHash("sha256");
        for (const file of files) {
          hash.update(file);
          hash.update(await readFile(path.join(outDir, file)));
        }
        const version = hash.digest("hex").slice(0, 12);

        const template = await readFile(
          new URL("../src/pwa/sw.template.js", import.meta.url),
          "utf8",
        );
        const worker = template
          .replace("__SW_VERSION__", version)
          .replace("__SW_PRECACHE__", JSON.stringify(files.map(toUrl), null, 2));

        await writeFile(path.join(outDir, "sw.js"), worker);
        await writeFile(
          path.join(outDir, "version.json"),
          JSON.stringify({ version, builtAt: new Date().toISOString() }),
        );

        logger.info(`service worker ${version} — ${files.length} precached files`);
      },
    },
  };
}
