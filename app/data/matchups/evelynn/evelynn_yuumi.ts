// app/data/matchups/evelynn/evelynn_yuumi.ts
import type { MatchupSummary } from "../_types";

export const evelynn_yuumi: MatchupSummary = {
  champs: ["evelynn", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 유미 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Yuumi's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
