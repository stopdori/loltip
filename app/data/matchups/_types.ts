export type MatchupSummary = {
  champs: [string, string];

  summary?: {
    ko: string[];
    en: string[];
  };

  highlightsByChamp: {
    [champId: string]: {
      ko: string[];
      en: string[];
    };
  } & { common?: never }; // "common"은 highlightsByChamp가 아니라 최상위 필드로 써야 함 — 실수로 안쪽에 넣으면 타입 에러로 즉시 표시됨

  common?: {
    ko: string[];
    en: string[];
  };
};

// 색인 대상이 되기 위한 최소 판정 문장 수(해당 로케일 기준, 두 챔피언 + 공통 합계).
// 판정 문장이 1~2개뿐인 얇은 페이지가 sitemap 대부분을 차지하던 문제로 1 → 3으로 올렸다.
export const MIN_HIGHLIGHTS_FOR_INDEX = 3;

// 이 로케일에서 매치업 페이지가 보여주는 판정 문장 수(두 챔피언 각각 + 공통, 빈 문자열 제외).
export function countHighlights(
  data: MatchupSummary,
  champA: string,
  champB: string,
  lang: "ko" | "en"
): number {
  const count = (arr: string[] | undefined) => (arr ?? []).filter((s) => s !== "").length;
  return (
    count(data.highlightsByChamp?.[champA]?.[lang]) +
    count(data.highlightsByChamp?.[champB]?.[lang]) +
    count(data.common?.[lang])
  );
}

// 판정 문장이 하나라도 있는가 — 챔프 페이지의 매치업 링크 목록 기준(사용자 접근 경로라
// 색인 기준과 무관하게 내용이 있는 매치업은 모두 링크한다. noindex 페이지도 follow라 문제없음).
export function hasMatchupContent(
  data: MatchupSummary,
  champA: string,
  champB: string,
  lang: "ko" | "en"
): boolean {
  return countHighlights(data, champA, champB, lang) > 0;
}

// "이 매치업이 이 로케일에서 색인 대상인가"를 판정하는 유일한 기준.
// 아래 곳들이 모두 이 함수를 쓴다 — 규칙을 바꿀 땐 여기(와 MIN_HIGHLIGHTS_FOR_INDEX) 한 곳만 고칠 것:
//  - interactions/[pair]/page.tsx generateMetadata: !isMatchupIndexable(...) 이면 noindex,follow
//    (hreflang도 양쪽 로케일이 모두 isMatchupIndexable일 때만 출력)
//  - sitemap.ts: isMatchupIndexable(...)인 로케일 URL만 sitemap에 포함
//  - 홈(/champ)의 "판정이 많은 상호작용" 목록
// 판정은 로케일별이다(KO에만 내용이 있으면 KO에서만 색인 대상) — 반드시 현재 로케일의 lang을 넘길 것.
export function isMatchupIndexable(
  data: MatchupSummary,
  champA: string,
  champB: string,
  lang: "ko" | "en"
): boolean {
  return countHighlights(data, champA, champB, lang) >= MIN_HIGHLIGHTS_FOR_INDEX;
}