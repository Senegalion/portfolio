// Build-time helpers (server only — never import from client scripts).
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { SITE } from "./site";

/** True when a CV PDF has been placed at public/<SITE.cvPath>. */
export const hasCv = existsSync(path.join(process.cwd(), "public", SITE.cvPath));

function commit() {
  const fromCi = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromCi) return fromCi.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] }).toString().trim();
  } catch {
    return "local";
  }
}

export const BUILD = {
  commit: commit(),
  date: new Date().toISOString().slice(0, 10),
};
