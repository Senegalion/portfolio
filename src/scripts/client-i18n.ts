import type { Translations } from "../i18n/pl";

export type ClientStrings = Translations["client"];

let cache: ClientStrings | undefined;

/** Strings rendered by BaseLayout into <script type="application/json" id="client-i18n">. */
export function strings(): ClientStrings {
  if (!cache) {
    const el = document.getElementById("client-i18n");
    cache = JSON.parse(el?.textContent || "{}") as ClientStrings;
  }
  return cache;
}
