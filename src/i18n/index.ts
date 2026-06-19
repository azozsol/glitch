import { fr } from "./fr";
import { en } from "./en";
import type { Dictionary } from "./types";

export const SUPPORTED_LANGS = ["fr", "en"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

export const DEFAULT_LANG: Lang = "fr";

const dictionaries: Record<Lang, Dictionary> = { fr, en };

export function isValidLang(value: string | undefined): value is Lang {
    return !!value && (SUPPORTED_LANGS as readonly string[]).includes(value);
}

export function getDictionary(lang: string | undefined): Dictionary {
    return isValidLang(lang) ? dictionaries[lang] : dictionaries[DEFAULT_LANG];
}

export type { Dictionary };