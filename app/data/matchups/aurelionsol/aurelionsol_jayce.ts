// app/data/matchups/aurelionsol/aurelionsol_jayce.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_jayce: MatchupSummary = {
  champs: ["aurelionsol", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Jayce's Hammer Form Q [[DASH]]."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
