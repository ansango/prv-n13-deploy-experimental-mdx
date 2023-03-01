export const i18n = {
  defaultLocale: "gl",
  locales: ["es", "en", "gl"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
