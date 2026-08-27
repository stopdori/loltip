// app/data/matchups/chogath/chogath_viego.ts
import type { MatchupSummary } from "../_types";

export const chogath_viego: MatchupSummary = {
  champs: ["chogath", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 비에고 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Viego's W [[SKILL_CHARGED]].",
        "Q [[AIRBORNE]] can interrupt Viego's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Viego's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
