import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ko", "en"],
  defaultLocale: "ko",
  // proxy.ts가 locale 없는 경로를 무조건 /ko로 308 리다이렉트하기 때문에
  // Accept-Language 기반 자동 감지는 실질적으로 발동하지 않음. 의도를 명시.
  localeDetection: false,
  // next-intl이 미들웨어 단계에서 자동으로 hreflang Link 헤더를 생성하는데,
  // x-default를 로케일 프리픽스가 없는 bare pathname(예: /champ/aatrox)으로
  // 고정 생성함. 이 프로젝트는 프리픽스 없는 구주소를 410 Gone으로 삭제해뒀기 때문에
  // x-default가 항상 죽은 링크를 가리키는 문제가 있었음.
  // 이제 각 페이지의 generateMetadata에서 alternates.languages를 직접 정확하게
  // 작성하므로, 이 자동 생성을 끄고 그쪽으로 신호를 일원화함.
  alternateLinks: false,
});
