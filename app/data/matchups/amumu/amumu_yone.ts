// app/data/matchups/amumu/amumu_yone.ts
import type { MatchupSummary } from "../_types";

export const amumu_yone: MatchupSummary = {
  champs: ["amumu", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 요네 Q3, E(돌진 단계), E(복귀 단계) R를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.\n단, 아무무 Q로 요네 E(복귀 단계)를 따라갈 수 있지만, 몸이 닿으면 아무무가 이동을 멈춤.\n닿지 않으면 아무무 Q의 최대(거리? 시간?)까지 이동.", "아무무 R의 [[STUN]]로 요네 Q3, E(돌진 단계)를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 요네 R(시전 집중)을 끊을 수 없음.", "아무무 Q로 요네 Q3, R의 [[AIRBORNE]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n단, 데미지는 유효."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Yone's Q3, E (dash phase), E (return phase), or R, but can follow him.\nHowever, [[STUN]] remains active.\nNote: Amumu's Q can follow Yone's E (return phase), but stops if they make body contact.\nIf no contact, Amumu moves to Q's maximum range/time.", "Amumu's R [[STUN]] can interrupt Yone's Q3 and E (dash phase).", "Amumu's Q and R [[STUN]] cannot interrupt Yone's R (channeling).", "Amumu's Q is affected by Yone's Q3 and R [[AIRBORNE]], but can still move if the dash phase activates.\nHowever, damage is applied."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
