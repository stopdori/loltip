// app/data/matchups/amumu/amumu_jax.ts
import type { MatchupSummary } from "../_types";

export const amumu_jax: MatchupSummary = {
  champs: ["amumu", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 잭스 Q를 끊을 수 없지만 따라갈 수 있음.\n단, [[STUN]]은 남아있음.", "아무무 R의 [[STUN]]로 잭스 Q를 끊을 수 있음.", "아무무 Q, R의 [[STUN]]로 잭스 E(채널링)을 끊을 수 없음.", "아무무 Q로 잭스 E의 [[STUN]]에 걸리지만 돌진 단계가 발동하면 이동할 수 있음.\n데미지는 유효하고 E의 [[STUN]]도 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jax's Q, but can follow him.\nHowever, [[STUN]] remains active.", "Amumu's R [[STUN]] can interrupt Jax's Q.", "Amumu's Q and R [[STUN]] cannot interrupt Jax's E (channeling).", "Amumu's Q is affected by Jax's E [[STUN]], but can still move if the dash phase activates.\nDamage is applied and E's [[STUN]] remains active."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
