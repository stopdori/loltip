// app/data/matchups/chogath/chogath_nidalee.ts
import type { MatchupSummary } from "../_types";

export const chogath_nidalee: MatchupSummary = {
  champs: ["chogath", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Nidalee's Cougar Form W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
