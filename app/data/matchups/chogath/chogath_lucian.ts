// app/data/matchups/chogath/chogath_lucian.ts
import type { MatchupSummary } from "../_types";

export const chogath_lucian: MatchupSummary = {
  champs: ["chogath", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 루시안 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Lucian's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Lucian's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
