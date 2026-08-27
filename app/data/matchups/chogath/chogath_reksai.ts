// app/data/matchups/chogath/chogath_reksai.ts
import type { MatchupSummary } from "../_types";

export const chogath_reksai: MatchupSummary = {
  champs: ["chogath", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Rek'Sai's Burrowed E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Rek'Sai's Burrowed E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    reksai: {
      ko: [],
      en: [],
    },
  },
};
