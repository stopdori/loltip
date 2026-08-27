// app/data/matchups/chogath/chogath_ezreal.ts
import type { MatchupSummary } from "../_types";

export const chogath_ezreal: MatchupSummary = {
  champs: ["chogath", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 이즈리얼 E의 [[BLINK]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Ezreal's E [[BLINK]].",
        "W [[SILENCE]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[SILENCE]] still applies."],
    },
    ezreal: {
      ko: [],
      en: [],
    },
  },
};
