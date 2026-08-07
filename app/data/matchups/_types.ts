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

export function hasKoContent(arr: string[] | undefined): boolean {
  return (arr ?? []).some((s) => s !== "");
}