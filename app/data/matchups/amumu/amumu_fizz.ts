// app/data/matchups/amumu/amumu_fizz.ts
import type { MatchupSummary } from "../_types";

export const amumu_fizz: MatchupSummary = {
  champs: ["amumu", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 피즈 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 피즈 Q를 끊을 수 있음.", "아무무 Q로 피즈 R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효하고 [[AIRBORNE]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Fizz's Q, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Fizz's Q.", "Amumu's Q is affected by Fizz's R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied and [[AIRBORNE]] remains active."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
