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
  };

  common?: {
    ko: string[];
    en: string[];
  };
};

export function hasKoContent(arr: string[] | undefined): boolean {
  return (arr ?? []).some((s) => s !== "");
}