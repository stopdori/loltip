// app/data/matchups/amumu/amumu_sylas.ts
import type { MatchupSummary } from "../_types";

export const amumu_sylas: MatchupSummary = {
  champs: ["amumu", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 사일러스 W, E1, E2를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 사일러스 W, E1, E2(돌진 단계)를 끊을 수 있음.", "아무무 Q로 사일러스 E2의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Sylas's W, E1, or E2, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Sylas's W, E1, and E2 (dash phases).", "Amumu's Q is affected by Sylas's E2 [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
