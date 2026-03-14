// app/data/matchups/amumu/amumu_leesin.ts
import type { MatchupSummary } from "../_types";

export const amumu_leesin: MatchupSummary = {
  champs: ["amumu", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 리신 Q2, W를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 리신 Q2, W를 끊을 수 있음.", "아무무 Q로 리신 R의 [[KNOCKBACK]], [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Lee Sin's Q2 or W, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Lee Sin's Q2 and W.", "Amumu's Q is affected by Lee Sin's R [[KNOCKBACK]] and [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
