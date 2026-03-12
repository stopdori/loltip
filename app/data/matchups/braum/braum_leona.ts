// app/data/matchups/braum/braum_leona.ts
import type { MatchupSummary } from "../_types";

export const braum_leona: MatchupSummary = {
  champs: ["braum", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 레오나 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 단, 레오나 R은 중심 부분을 바라봐야 적용", "브라움 E(방패)로 레오나 E를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 즉시 브라움에게 돌진.", "브라움 P의 [[STUN]]로 레오나 E를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 레오나 E(돌진 단계)를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Leona's basic attacks, Q, W, E and R.\nHowever, R only applies when facing toward the center.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Leona's E. Leona immediately dashes to Braum.", "Braum's P [[STUN]] cannot interrupt Leona's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Leona's E (dash phase)."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
