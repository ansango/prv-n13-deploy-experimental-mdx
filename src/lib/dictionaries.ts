// eslint-disable-next-line import/no-unresolved
"user server";
import type { Locale } from "@/i18n-config";

const dictionaries = {
  gl: () => import("../dictionaries/gl.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
