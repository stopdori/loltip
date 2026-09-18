// app/data/matchups/evelynn/evelynn_jhin.ts
import type { MatchupSummary } from "../_types";

export const evelynn_jhin: MatchupSummary = {
  champs: ["evelynn", "jhin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 진 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]",
        "W의 [[CHARM]]으로 진 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Jhin's R [[SKILL_CHANNEL]]. [[EXIST]]",
        "W [[CHARM]] cannot interrupt Jhin's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    jhin: {
      ko: [],
      en: [],
    },
  },
};
