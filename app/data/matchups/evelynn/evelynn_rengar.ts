// app/data/matchups/evelynn/evelynn_rengar.ts
import type { MatchupSummary } from "../_types";

export const evelynn_rengar: MatchupSummary = {
  champs: ["evelynn", "rengar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 렝가 P, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Rengar's P and R [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    rengar: {
      ko: [],
      en: [],
    },
  },
};
