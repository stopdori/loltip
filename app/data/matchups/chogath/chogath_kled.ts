// app/data/matchups/chogath/chogath_kled.ts
import type { MatchupSummary } from "../_types";

export const chogath_kled: MatchupSummary = {
  champs: ["chogath", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Kled's Mounted Form E / Dismounted Form Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Kled's Mounted Form E / Dismounted Form Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
