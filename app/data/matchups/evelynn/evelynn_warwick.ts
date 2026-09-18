// app/data/matchups/evelynn/evelynn_warwick.ts
import type { MatchupSummary } from "../_types";

export const evelynn_warwick: MatchupSummary = {
  champs: ["evelynn", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 워윅 W는 중단될 때 시전."],
      en: ["W [[CHARM]] can interrupt Warwick's R [[SKILL_CHANNEL]]. [[EXIST]] \n However, Warwick's W still fires when interrupted."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
