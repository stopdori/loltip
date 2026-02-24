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
};