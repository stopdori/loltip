// app/data/matchups/braum/braum_leesin.ts
import type { MatchupSummary } from "../_types";

export const braum_leesin: MatchupSummary = {
  champs: ["braum", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 리신 평타, Q, Q2, E, R, R의 당구를 막을([[DAMAGE_NULLIFY]]) 수 있음.\n 단, 리신 R의 [[KNOCKBACK]], [[AIRBORNE]] 은 남아있음.", "브라움 E(방패)로 리신 Q를 [[INTERCEPT_PROJECTILE]] 할 수 있음\n단, 리신이 Q2를 사용할 수 있음.", "브라움 P의 [[STUN]]로 리신 Q2, W를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 리신 Q2, W를 끊을 수 있음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] Lee Sin's basic attacks, Q, Q2, E, R and R's billiard shot.\nHowever, Lee Sin's R [[KNOCKBACK]] and [[AIRBORNE]] still apply.", "Braum's E(Shield) can [[INTERCEPT_PROJECTILE]] Lee Sin's Q.\nHowever, Lee Sin can still use Q2.", "Braum's P [[STUN]] cannot interrupt Lee Sin's Q2 or W. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Lee Sin's Q2 and W."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
