// app/data/matchups/evelynn/evelynn_zac.ts
import type { MatchupSummary } from "../_types";

export const evelynn_zac: MatchupSummary = {
  champs: ["evelynn", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]",
        "W의 [[CHARM]]으로 자크 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Zac's E [[SKILL_CHARGED]]. [[EXIST]]",
        "W [[CHARM]] cannot interrupt Zac's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
