// app/data/matchups/evelynn/evelynn_tristana.ts
import type { MatchupSummary } from "../_types";

export const evelynn_tristana: MatchupSummary = {
  champs: ["evelynn", "tristana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 트리스타나 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Tristana's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    tristana: {
      ko: [],
      en: [],
    },
  },
};
