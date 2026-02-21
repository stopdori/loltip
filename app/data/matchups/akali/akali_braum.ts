// app/data/matchups/akali/akali_braum.ts
import type { MatchupSummary } from "../_types";

export const akali_braum: MatchupSummary = {
  champs: ["akali", "braum"],
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 브라움 W를 따라 갈 수 있음"],
      en: [],
    },
    braum: {
      ko: ["브라움 E로 아칼리 평타, Q, E1, E2, R1, R2 모두 [[DAMAGE_NULLIFY]] 할 수 있음", "브라움 E로 아칼리 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 E로 아칼리 E1을 [[INTERCEPT_PROJECTILE]] 할 수 있음. \n단, E1를 막아도 투사체가 삭제되지 않고 아칼리가 E2를 사용 할 수 있음.", "브라움 P의 [[STUN]]로 아칼리 E1, E2, R1, R2를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2를 끊을 수 있음"],
      en: [],
    },
  },
};
