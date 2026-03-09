// app/data/matchups/braum/braum_elise.ts
import type { MatchupSummary } from "../_types";

export const braum_elise: MatchupSummary = {
  champs: ["braum", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 엘리스 인간폼 평타, Q, W / 거미폼 평타, Q를 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 엘리스 인간폼 평타, Q, E를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, E의 [[STUN]]은 남아있음.", "브라움 P의 [[STUN]]로 엘리스 거미폼 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 엘리스 거미폼 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Elise's human form basic attacks, Q and W, and spider form basic attacks and Q", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Elise's human form basic attacks, Q and E. However, E's [[STUN]] still applies.", "Braum's P [[STUN]] cannot interrupt Elise's spider form Q. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Elise's spider form Q"],
    },
    elise: {
      ko: [],
      en: [],
    },
  },
};
