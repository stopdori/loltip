// app/data/matchups/_types.ts
export type MatchupSummary = {
  /** 항상 [base, other] (사전순 기준) */
  champs: [string, string];

  highlightsByChamp: Record<
    string,
    {
      ko: string[];
      en: string[];
    }
  >;
};
