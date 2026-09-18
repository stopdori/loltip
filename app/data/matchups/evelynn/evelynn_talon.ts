// app/data/matchups/evelynn/evelynn_talon.ts
import type { MatchupSummary } from "../_types";

export const evelynn_talon: MatchupSummary = {
  champs: ["evelynn", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 탈론 E(벽넘기)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] cannot interrupt Talon's E (wall hop) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
