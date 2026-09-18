// app/data/matchups/evelynn/evelynn_ryze.ts
import type { MatchupSummary } from "../_types";

export const evelynn_ryze: MatchupSummary = {
  champs: ["evelynn", "ryze"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 라이즈 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Ryze's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    ryze: {
      ko: [],
      en: [],
    },
  },
};
