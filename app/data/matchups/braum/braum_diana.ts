// app/data/matchups/braum/braum_diana.ts
import type { MatchupSummary } from "../_types";

export const braum_diana: MatchupSummary = {
  champs: ["braum", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 다이애나 평타, Q, W, E, R [[DAMAGE_NULLIFY]] 할 수 있음", "브라움 E(방패)로 다이애나 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 P의 [[STUN]]로 다이애나 E을 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 다이애나 E를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Diana's basic attacks, Q, W, E and R", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Diana's Q", "Braum's P [[STUN]] cannot interrupt Diana's E. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Diana's E"],
    },
    diana: {
      ko: [],
      en: [],
    },
  },
};
