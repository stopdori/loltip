// app/data/matchups/braum/braum_nocturne.ts
import type { MatchupSummary } from "../_types";

export const braum_nocturne: MatchupSummary = {
  champs: ["braum", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 녹턴 평타, P(평타), Q, R2를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 녹턴 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 녹턴 Q가 브라움 E(방패)에 막히면 Q는 즉시 사라지지만, 브라움이 궤적을 남기고 다님", "브라움 P의 [[STUN]] R의 [[AIRBORNE]]으로 녹턴 R2를 끊을 수 없음."],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nocturne's basic attacks, P (basic attack), Q, and R2.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nocturne's Q.\nNote: If Nocturne's Q is blocked by Braum's E (shield), the Q immediately disappears — but the trail it leaves on Braum remains.","Braum's P [[STUN]] and R [[AIRBORNE]] cannot interrupt Nocturne's R2."],
    },
    nocturne: {
      ko: [],
      en: [],
    },
  },
};
