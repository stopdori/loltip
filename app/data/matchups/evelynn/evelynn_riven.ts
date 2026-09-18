// app/data/matchups/evelynn/evelynn_riven.ts
import type { MatchupSummary } from "../_types";

export const evelynn_riven: MatchupSummary = {
  champs: ["evelynn", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Riven's Q and E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
