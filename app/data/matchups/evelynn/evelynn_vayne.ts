// app/data/matchups/evelynn/evelynn_vayne.ts
import type { MatchupSummary } from "../_types";

export const evelynn_vayne: MatchupSummary = {
  champs: ["evelynn", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 베인 Q(구르기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Vayne's Q (roll) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
