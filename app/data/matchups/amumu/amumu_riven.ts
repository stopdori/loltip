// app/data/matchups/amumu/amumu_riven.ts
import type { MatchupSummary } from "../_types";

export const amumu_riven: MatchupSummary = {
  champs: ["amumu", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 리븐 Q1, Q2, Q3, E를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 리븐 Q1, Q2, Q3, E를 끊을 수 있음.", "아무무 Q로 리븐 Q의 [[AIRBORNE]], W의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 W의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Riven's Q1, Q2, Q3, or E, but can follow her.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Riven's Q1, Q2, Q3, and E.", "Amumu's Q is affected by Riven's Q [[AIRBORNE]] and W [[STUN]], but can still move if the dash phase activates.\nHowever, damage is applied and W's [[STUN]] remains active."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
