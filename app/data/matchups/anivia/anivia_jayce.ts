// app/data/matchups/anivia/anivia_jayce.ts
import type { MatchupSummary } from "../_types";

export const anivia_jayce: MatchupSummary = {
  champs: ["anivia", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Q [[STUN]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. \n However, [[STUN]] still applies.", "W [[TERRAIN]] [[AIRBORNE]] can interrupt Jayce's Hammer Form Q [[DASH]]."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
