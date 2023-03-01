import type { Locale } from "@/i18n-config";

import { getPage } from "./files";

export default function About({ params: { lang } }: { params: { lang: Locale } }) {
  const PageMDX = getPage(lang);
  return <PageMDX />;
}
