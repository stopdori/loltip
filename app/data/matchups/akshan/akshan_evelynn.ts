// app/data/matchups/akshan/akshan_evelynn.ts
import type { MatchupSummary } from "../_types";

export const akshan_evelynn: MatchupSummary = {
  champs: ["akshan", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: ["R의 [[TRUE_SIGHT]]로 이블린 P의 [[CAMOUFLAGE]]을 볼 수 있음."],
      en: ["R [[TRUE_SIGHT]] can reveal Evelynn's P [[CAMOUFLAGE]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 아크샨 E, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] can interrupt Akshan's E and R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
  },
};
