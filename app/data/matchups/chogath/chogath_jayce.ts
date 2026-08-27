// app/data/matchups/chogath/chogath_jayce.ts
import type { MatchupSummary } from "../_types";

export const chogath_jayce: MatchupSummary = {
  champs: ["chogath", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Jayce's Hammer Form Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
