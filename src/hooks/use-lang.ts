import { useParams } from "@tanstack/react-router";
import { getDictionary, type Lang, DEFAULT_LANG } from "@/i18n";

/**
 * Reads the `lang` param from the current route (set by the $lang
 * directory segment) and returns both the language code and its
 * dictionary. Falls back to the default language if, for any reason,
 * the param isn't present (shouldn't happen once routes are nested
 * under $lang, but keeps this safe).
 */
export function useLang() {
    const params = useParams({ strict: false }) as { lang?: string };
    const lang: Lang = (params.lang as Lang) ?? DEFAULT_LANG;
    const t = getDictionary(params.lang);
    return { lang, t };
}

/**
 * Splits a string containing a single "{strong}" placeholder into
 * [before, strongText, after] so it can be rendered with the strong
 * portion wrapped in <strong>. Used for the Difference section bodies,
 * e.g. "Every project starts with real thinking — {strong}. Then..."
 */
export function splitOnStrongPlaceholder(template: string, strongText: string): [string, string, string] {
    const [before, after] = template.split("{strong}");
    return [before ?? "", strongText, after ?? ""];
}