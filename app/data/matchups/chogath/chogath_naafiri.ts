// app/data/matchups/chogath/chogath_naafiri.ts
import type { MatchupSummary } from "../_types";

export const chogath_naafiri: MatchupSummary = {
  champs: ["chogath", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 나피리 E, R의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Naafiri's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Naafiri's E and R [[DASH]].",
        "W [[SILENCE]] cannot interrupt Naafiri's E and R [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
