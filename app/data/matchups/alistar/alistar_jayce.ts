// app/data/matchups/alistar/alistar_jayce.ts
import type { MatchupSummary } from "../_types";

export const alistar_jayce: MatchupSummary = {
  champs: ["alistar", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "E의 [[STUN]]로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 제이스 해머폼 Q의 [[SLOW]], 해머폼 E의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Jayce's Hammer Form Q [[DASH]].", "E [[STUN]] cannot interrupt Jayce's Hammer Form Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[CC_CLEANSE]] can cleanse Jayce's Hammer Form Q [[SLOW]] and Hammer Form E [[KNOCKBACK]]."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
