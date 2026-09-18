// app/data/matchups/evelynn/evelynn_poppy.ts
import type { MatchupSummary } from "../_types";

export const evelynn_poppy: MatchupSummary = {
  champs: ["evelynn", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 뽀삐 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.",
        "W의 [[CHARM]]으로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] cannot interrupt Poppy's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies.",
        "W [[CHARM]] can interrupt Poppy's R [[SKILL_CHARGED]]. [[EXIST]]"],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
