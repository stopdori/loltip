// app/data/matchups/braum/braum_jax.ts
import type { MatchupSummary } from "../_types";

export const braum_jax: MatchupSummary = {
  champs: ["braum", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 잭스 평타, Q, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음.\n단, E의 [[STUN]]은 남아있음.\n단, P는 막을 수 없음.", "브라움 P의 [[STUN]]로 잭스 Q를 끊을 수 없음. 단, [[STUN]]은 남아있음", "브라움 R의 [[AIRBORNE]]으로 잭스 Q를 끊을 수 있음", "브라움 P의 [[STUN]], R의 [[AIRBORNE]]으로 잭스 E를 멈출 수 없음"],
      en: ["Braum's E(Shield) can [[DAMAGE_NULLIFY]] against Jax's basic attacks, Q, W, E and R.\nHowever, E's [[STUN]] still applies.\nHowever, P cannot be blocked.", "Braum's P [[STUN]] cannot interrupt Jax's Q. However, [[STUN]] still applies.", "Braum's R [[AIRBORNE]] can interrupt Jax's Q.", "Braum's P [[STUN]] and R [[AIRBORNE]] cannot stop Jax's E."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
