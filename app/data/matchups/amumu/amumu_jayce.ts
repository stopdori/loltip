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
      ko: ["아무무 Q의 [[STUN]]로 제이스 해머폼 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 제이스 해머폼 Q를 끊을 수 있음.", "아무무 Q로 제이스 해머폼 E의 [[KNOCKBACK]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jayce's Hammer Q, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Jayce's Hammer Q.", "Amumu's Q is affected by Jayce's Hammer E [[KNOCKBACK]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    jayce: {
      ko: [],
      en: [],
    },
  },
};
