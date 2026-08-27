// app/data/matchups/chogath/chogath_zac.ts
import type { MatchupSummary } from "../_types";

export const chogath_zac: MatchupSummary = {
  champs: ["chogath", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 자크 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Zac's E [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Zac's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Zac's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
