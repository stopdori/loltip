// 사이트 운영자 표기 정보 — About, 개인정보처리방침, 공통 푸터가 함께 참조한다.
export const OPERATOR_NAME = { ko: "LOLTIP 운영자", en: "LOLTIP Operator" } as const;
export const CONTACT_EMAIL = "contact@loltip.com";
// 사이트 오픈 시기 — About 페이지 표기용.
export const SITE_LAUNCH = { ko: "2026년 2월", en: "February 2026" } as const;

// 최종 업데이트 = 빌드 시점 날짜(KST). next.config.js의 env.BUILD_DATE("YYYY-MM-DD")가 빌드 때 인라인되며,
// 값이 없으면(로컬 dev 등) 현재 날짜로 대신한다.
export function formatBuildDate(lang: "ko" | "en"): string {
  const iso = process.env.BUILD_DATE || new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
  const [y, m, d] = iso.split("-").map(Number);
  if (lang === "ko") return `${y}년 ${m}월 ${d}일`;
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][m - 1];
  return `${month} ${d}, ${y}`;
}
