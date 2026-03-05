// app/data/matchups/akali/akali_braum.ts
import type { MatchupSummary } from "../_types";

export const akali_braum: MatchupSummary = {
  champs: ["akali", "braum"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 브라움 W를 따라 갈 수 있음"],
      en: ["Akali's E2 can follow Braum's W"],
    },
    braum: {
      ko: ["브라움 E(방패)로 아칼리 평타, Q, E1, E2, R1, R2 모두 [[DAMAGE_NULLIFY]] 할 수 있음", "브라움 E(방패)로 아칼리 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음", "브라움 E(방패)로 아칼리 E1을 [[INTERCEPT_PROJECTILE]] 할 수 있음. \n단, E1를 막아도 투사체가 삭제되지 않고 아칼리가 E2를 사용 할 수 있음.", "브라움 P의 [[STUN]]로 아칼리 E1, E2, R1, R2를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 아칼리 E1, E2, R1, R2를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Akali's basic attacks, Q, E1, E2, R1, and R2", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Akali's Q", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Akali's E1. \nHowever, blocking E1 does not destroy the projectile, and Akali can still use E2.", "Braum's P [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2. However, the [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Akali's E1, E2, R1, and R2"],
    },
  },
};
