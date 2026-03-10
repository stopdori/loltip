// app/data/matchups/braum/braum_kalista.ts
import type { MatchupSummary } from "../_types";

export const braum_kalista: MatchupSummary = {
  champs: ["braum", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 칼리스타 평타, Q, Q(관통), E를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, E는 칼리스타 방향을 바라봐야 적용.", "브라움 E(방패)로 칼리스타 평타, Q, R을 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 칼리스타 Q로 대상을 처치하면서 관통한 P의 스택은 브라움에게 전이\n단, 칼리스타 R은 날아가는 경로를 막으면 브라움 주변에 [[AIRBORNE]]에 걸리고 진행을 멈춤.", "브라움 P의 [[STUN]]로 칼리스타 P를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 칼리스타 P를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Kalista's basic attacks, Q, Q (pierce-through) and E.\nHowever, E only applies when facing toward Kalista.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Kalista's basic attacks, Q and R.\nHowever, if Kalista's Q kills a target and the pierce-through hits Braum, Kalista's P stacks are transferred to Braum.\nHowever, if Kalista's R is blocked mid-flight, nearby allies are [[AIRBORNE]] and R stops.", "Braum's P [[STUN]] cannot interrupt Kalista's P. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Kalista's P."],
    },
    kalista: {
      ko: [],
      en: [],
    },
  },
};
