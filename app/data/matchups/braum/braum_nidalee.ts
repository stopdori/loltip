// app/data/matchups/braum/braum_nidalee.ts
import type { MatchupSummary } from "../_types";

export const braum_nidalee: MatchupSummary = {
  champs: ["braum", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 니달리 인간폼 평타, Q / 쿠거폼 평타, Q, W, E를 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 니달리 인간폼 평타, Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단 니달리 인간폼 Q로 발동되는 P는 남아있음.", "브라움 P의 [[STUN]]로 니달리 쿠거폼 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 니달리 쿠거폼 W를 끊을 수 있음"],
      en: ["Braum's E (shield) can [[DAMAGE_NULLIFY]] Nidalee (human form) basic attacks and Q / (Cougar form) basic attacks, Q, W, and E.","Braum's E (shield) can [[INTERCEPT_PROJECTILE]] Nidalee (human form) basic attacks and Q.\nNote: Nidalee's P triggered by human form Q still applies.","Braum's P [[STUN]] cannot interrupt Nidalee Cougar form W. Note: [[STUN]] still applies","Braum's R [[AIRBORNE]] can interrupt Nidalee Cougar form W"],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
