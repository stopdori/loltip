// app/data/matchups/amumu/amumu_sion.ts
import type { MatchupSummary } from "../_types";

export const amumu_sion: MatchupSummary = {
  champs: ["amumu", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 사이온 R을 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 사이온과의 거리가 너무 멀어지면 아무무가 이동을 멈춤", "아무무 Q, R의 [[STUN]]로 사이온 Q(시전 집중)을 끊을 수 있음.", "아무무 Q로 사이온 Q, R의 [[AIRBORNE]] [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Sion's R, but can follow him.\nHowever, [[STUN]] remains active.\nNote: If Sion moves too far away, Amumu stops moving.", "Amumu's Q and R [[STUN]] can interrupt Sion's Q (channeling).", "Amumu's Q is affected by Sion's Q and R [[AIRBORNE]] [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and [[STUN]] remains active."],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
