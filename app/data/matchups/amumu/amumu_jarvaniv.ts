// app/data/matchups/amumu/amumu_jarvaniv.ts
import type { MatchupSummary } from "../_types";

export const amumu_jarvaniv: MatchupSummary = {
  champs: ["amumu", "jarvaniv"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 자르반 EQ를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 자르반 QE를 끊을 수 있음.", "아무무 Q로 자르반 EQ의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jarvan IV's EQ combo, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Jarvan IV's QE combo.", "Amumu's Q is affected by Jarvan IV's EQ [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    jarvaniv: {
      ko: [],
      en: [],
    },
  },
};
