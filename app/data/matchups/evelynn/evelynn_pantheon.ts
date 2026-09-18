// app/data/matchups/evelynn/evelynn_pantheon.ts
import type { MatchupSummary } from "../_types";

export const evelynn_pantheon: MatchupSummary = {
  champs: ["evelynn", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]",
        "W의 [[CHARM]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]"],
      en: ["W [[CHARM]] can interrupt Pantheon's R [[SKILL_CHANNEL]]. [[EXIST]]",
        "W [[CHARM]] cannot interrupt Pantheon's W [[DASH]]. [[NOT_EXIST]]"],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
