// app/data/matchups/chogath/chogath_hecarim.ts
import type { MatchupSummary } from "../_types";

export const chogath_hecarim: MatchupSummary = {
  champs: ["chogath", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Hecarim's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    hecarim: {
      ko: [],
      en: [],
    },
  },
};
