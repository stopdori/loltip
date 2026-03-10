// app/data/matchups/braum/braum_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const braum_caitlyn: MatchupSummary = {
  champs: ["braum", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 케이틀린 평타, Q, E, R 투사체를 모두 막을([[DAMAGE_NULLIFY]]) 수 있음", "브라움 E(방패)로 케이틀린 평타, Q, E, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음. 단, 케이틀린 E의 [[SLOW]]는 남아있음.", "브라움 P의 [[STUN]]로 케이틀린 E을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 케이틀린 E을 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] all of Caitlyn's auto attacks, Q, E and R projectiles", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Caitlyn's auto attacks, Q, E and R. However, Caitlyn's E [[SLOW]] still applies.", "Braum's P [[STUN]] cannot interrupt Caitlyn's E. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Caitlyn's E"],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
