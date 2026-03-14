// app/data/matchups/amumu/amumu_kled.ts
import type { MatchupSummary } from "../_types";

export const amumu_kled: MatchupSummary = {
  champs: ["amumu", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q를 끊을 수 있음.", "아무무 Q로 클레드 승마폼 Q의 [[GRAB]], R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Kled's mounted E / dismounted Q, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Kled's mounted E / dismounted Q.", "Amumu's Q is affected by Kled's mounted Q [[GRAB]] and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
