import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  // proxy.ts가 locale 없는 경로를 무조건 /ko로 308 리다이렉트하기 때문에
  // Accept-Language 기반 자동 감지는 실질적으로 발동하지 않음. 의도를 명시.
  localeDetection: false,
});
