// app/data/matchups/amumu/amumu_annie.ts
import type { MatchupSummary } from "../_types";

export const amumu_annie: MatchupSummary = {
  champs: ["amumu", "annie"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 애니 R(애니가 티버와 멀어지면 티버가 애니 옆으로 순간이동 하는것)을 따라갈 수 있음.\n단, [[STUN]]은 R(티버)에게 남아있음.", "아무무 Q로 애니 P의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 애니 Q, W, R로 인한 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] can follow Annie's R (when Annie moves away from Tibbers, Tibbers teleports next to Annie).\nHowever, [[STUN]] remains on R (Tibbers).", "Amumu's Q is affected by Annie's passive [[STUN]], but can still move if the dash phase activates.\nHowever, damage from Annie's Q, W, and R is applied and [[STUN]] remains active."],
    },
    annie: {
      ko: [],
      en: [],
    },
  },
};
