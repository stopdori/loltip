// app/data/matchups/braum/braum_ivern.ts
import type { MatchupSummary } from "../_types";

export const braum_ivern: MatchupSummary = {
  champs: ["braum", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 아이번 평타, Q, E, R(데이지 평타, 3타)을 막을([[DAMAGE_NULLIFY]]) 수 있음.", "브라움 E(방패)로 아이번 평타, Q, R(데이지 3타)을 [[INTERCEPT_PROJECTILE]] 할 수 있음.", "아이번 R의 [[AIRBORNE]]은 남아있음.", "브라움 P의 [[STUN]]로 아이번 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아이번 Q를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Ivern's basic attacks, Q, E and R (Daisy basic attacks, 3rd hit).", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Ivern's basic attacks, Q and R (Daisy 3rd hit).", "Ivern R's [[AIRBORNE]] still applies.", "Braum's P [[STUN]] cannot interrupt Ivern's Q. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Ivern's Q."],
    },
    ivern: {
      ko: [],
      en: [],
    },
  },
};
