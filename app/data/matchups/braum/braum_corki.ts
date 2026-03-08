// app/data/matchups/braum/braum_corki.ts
import type { MatchupSummary } from "../_types";

export const braum_corki: MatchupSummary = {
  champs: ["braum", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 코르키 평타, Q, R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, R의 [[STUN]]은 남아있음.", "브라움 E(방패)로 코르키 평타, Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "브라움 P의 [[STUN]]로 코르키 W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 코르키 W을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Corki's basic attacks, Q and R. However, R's [[STUN]] still applies.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Corki's basic attacks, Q and R.", "Braum's P [[STUN]] cannot interrupt Corki's W. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Corki's W."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
