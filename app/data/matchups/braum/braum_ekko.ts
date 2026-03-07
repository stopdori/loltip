// app/data/matchups/braum/braum_ekko.ts
import type { MatchupSummary } from "../_types";

export const braum_ekko: MatchupSummary = {
  champs: ["braum", "ekko"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 에코 평타, Q, E(평타), R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, R은 중심방향을 바라봐야 유효", "브라움 E(방패)로 에코 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음. 이때 투사체 삭제", "브라움 P의 [[STUN]]로 에코 E을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 에코 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Ekko's basic attacks, Q, E (basic attacks) and R. However, R only applies when facing toward the center.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Ekko's Q", "Braum's P [[STUN]] cannot interrupt Ekko's E. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Ekko's E"],
    },
    ekko: {
      ko: [],
      en: [],
    },
  },
};
