// app/data/matchups/chogath/chogath_samira.ts
import type { MatchupSummary } from "../_types";

export const chogath_samira: MatchupSummary = {
  champs: ["chogath", "samira"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 사미라 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 사미라 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 사미라 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Samira's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Samira's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Samira's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    samira: {
      ko: [],
      en: [],
    },
  },
};
