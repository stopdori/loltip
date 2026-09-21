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

export function hasContent(arr: string[] | undefined): boolean {
  return (arr ?? []).some((s) => s !== "");
}

// "이 매치업이 이 로케일에서 색인 대상인가"를 판정하는 유일한 기준.
// 아래 세 곳이 모두 이 함수를 쓴다 — 규칙을 바꿀 땐 여기 한 곳만 고칠 것:
//  - matchup/[pair]/page.tsx generateMetadata: !isMatchupIndexable(...) 이면 noindex,nofollow
//  - sitemap.ts: isMatchupIndexable(...)인 로케일 URL만 sitemap에 포함
//  - 챔프 페이지의 매치업 링크 목록: 색인 대상인 매치업으로만 링크(noindex 페이지로 링크 금지)
// 판정은 로케일별이다(KO에만 내용이 있으면 KO에서만 색인 대상) — 반드시 현재 로케일의 lang을 넘길 것.
// 두 챔피언 각자의 판정 문장 또는 공통 문장 중 하나라도 비어 있지 않으면 색인 대상.
export function isMatchupIndexable(
  data: MatchupSummary,
  champA: string,
  champB: string,
  lang: "ko" | "en"
): boolean {
  return (
    hasContent(data.highlightsByChamp?.[champA]?.[lang]) ||
    hasContent(data.highlightsByChamp?.[champB]?.[lang]) ||
    hasContent(data.common?.[lang])
  );
}