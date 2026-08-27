// app/data/matchups/chogath/chogath_graves.ts
import type { MatchupSummary } from "../_types";

export const chogath_graves: MatchupSummary = {
  champs: ["chogath", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 그레이브즈 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Graves's E and R [[DASH]].",
        "W [[SILENCE]] cannot interrupt Graves's E and R [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    graves: {
      ko: [],
      en: [],
    },
  },
};
