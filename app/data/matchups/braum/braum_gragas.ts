// app/data/matchups/braum/braum_gragas.ts
import type { MatchupSummary } from "../_types";

export const braum_gragas: MatchupSummary = {
  champs: ["braum", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 그라가스 평타, Q, W(평타), E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 그라가스 Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 그라가스 R(투사체)은 방패에 닿으면 투사체 폭발.", "브라움 P의 [[STUN]]로 그라가스 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 그라가스 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Gragas's basic attacks, Q, W(auto), E, and R.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Gragas's Q and R\nHowever, Gragas's R projectile explodes upon hitting the shield.", "Braum's P [[STUN]] cannot interrupt Gragas's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Gragas's E."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
