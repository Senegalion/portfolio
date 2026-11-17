// Build-time helpers (server only — never import from client scripts).
import { execSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { SITE } from "./site";

/** True when a CV PDF has been placed at public/<SITE.cvPath>. */
export const hasCv = existsSync(path.join(process.cwd(), "public", SITE.cvPath));

function git(cmd: string) {
  try {
    return execSync(`git ${cmd}`, { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "";
  }
}

function commit() {
  const fromCi = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromCi) return fromCi.slice(0, 7);
  return git("rev-parse --short HEAD") || "local";
}

/** Release number, bumped by hand in package.json on each meaningful update. */
const pkg = JSON.parse(readFileSync(path.join(process.cwd(), "package.json"), "utf8")) as { version: string };

export const BUILD = {
  version: pkg.version,
  commit: commit(),
  /** Date of the last commit (YYYY-MM-DD) — when the content last changed, not when it was deployed. */
  updated: git("log -1 --format=%cs") || new Date().toISOString().slice(0, 10),
};
