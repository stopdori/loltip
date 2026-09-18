// app/data/matchups/evelynn/evelynn_naafiri.ts
import type { MatchupSummary } from "../_types";

export const evelynn_naafiri: MatchupSummary = {
  champs: ["evelynn", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]",
        "W의 [[CHARM]]으로 나피리 E, R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Naafiri's R [[SKILL_CHANNEL]]. [[EXIST]]",
        "W [[CHARM]] cannot interrupt Naafiri's E and R [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
