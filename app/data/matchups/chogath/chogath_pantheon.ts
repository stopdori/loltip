// app/data/matchups/chogath/chogath_pantheon.ts
import type { MatchupSummary } from "../_types";

export const chogath_pantheon: MatchupSummary = {
  champs: ["chogath", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 판테온 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Pantheon's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Pantheon's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Pantheon's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
