// app/data/matchups/chogath/chogath_lillia.ts
import type { MatchupSummary } from "../_types";

export const chogath_lillia: MatchupSummary = {
  champs: ["chogath", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, W의 공격도 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted.",
        "W [[SILENCE]] cannot interrupt Lillia's W [[DASH]]. \n However, W's damage instance cannot be interrupted either. \n However, the [[SILENCE]] still applies."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
