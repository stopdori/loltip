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
      ko: ["알리스타 Q, W로 제이스 해머폼 Q를 끊을 수 있음", "알리스타 E의 [[STUN]]로 제이스 해머폼 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "알리스타 R의 [[CC_CLEANSE]]로 제이스 해머폼 Q의 [[SLOW]], 해머폼 E의 [[AIRBORNE]]을 해제할 수 있음"],
      en: ["Alistar's Q and W can interrupt Jayce's 해머폼 Q", "Alistar's E [[STUN]] cannot interrupt Jayce's 해머폼 Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Jayce's 해머폼 Q [[SLOW]], 해머폼 E [[AIRBORNE]]"],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
