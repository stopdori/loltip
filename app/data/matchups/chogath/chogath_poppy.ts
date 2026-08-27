// app/data/matchups/chogath/chogath_poppy.ts
import type { MatchupSummary } from "../_types";

export const chogath_poppy: MatchupSummary = {
  champs: ["chogath", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Poppy's R [[SKILL_CHARGED]].",
        "Q [[AIRBORNE]] can interrupt Poppy's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
