// app/data/matchups/evelynn/evelynn_kindred.ts
import type { MatchupSummary } from "../_types";

export const evelynn_kindred: MatchupSummary = {
  champs: ["evelynn", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Kindred's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
