// app/data/matchups/evelynn/evelynn_samira.ts
import type { MatchupSummary } from "../_types";

export const evelynn_samira: MatchupSummary = {
  champs: ["evelynn", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 사미라 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.",
        "W의 [[CHARM]]으로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] cannot interrupt Samira's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies.",
        "W [[CHARM]] can interrupt Samira's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
