// app/data/matchups/evelynn/evelynn_shen.ts
import type { MatchupSummary } from "../_types";

export const evelynn_shen: MatchupSummary = {
  champs: ["evelynn", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 쉔 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.",
        "W의 [[CHARM]]으로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] cannot interrupt Shen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies.",
        "W [[CHARM]] can interrupt Shen's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
