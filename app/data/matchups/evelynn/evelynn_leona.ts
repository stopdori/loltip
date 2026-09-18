// app/data/matchups/evelynn/evelynn_leona.ts
import type { MatchupSummary } from "../_types";

export const evelynn_leona: MatchupSummary = {
  champs: ["evelynn", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 레오나 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Leona's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
