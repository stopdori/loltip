// app/data/matchups/amumu/amumu_jayce.ts
import type { MatchupSummary } from "../_types";

export const amumu_jayce: MatchupSummary = {
  champs: ["amumu", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 제이스 해머폼 Q의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 제이스 해머폼 E의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jayce's Hammer form Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Jayce's Hammer form Q [[DASH]].", "Amumu's R [[STUN]] can interrupt Jayce's Hammer form Q [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Jayce's Hammer form E [[KNOCKBACK]] and continue [[DASH]]."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
