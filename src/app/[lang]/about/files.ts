// eslint-disable-next-line import/no-unresolved
"user server";
import type { Locale } from "@/i18n-config";

import enPage from "./about.en.mdx";
import esPage from "./about.es.mdx";
import glPage from "./about.gl.mdx";

export const pages = {
  en: enPage,
  es: esPage,
  gl: glPage,
};

export const getPage = (locale: Locale) => pages[locale];
