// app/data/matchups/ahri/ahri_jax.ts
import type { MatchupSummary } from "../_types";

export const ahri_jax: MatchupSummary = {
  champs: ["ahri", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E로 잭스 Q를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Jax's Q"],
    },
    jax: {
      ko: ["잭스 E의 [[STUN]]로 아리 R을 끊을 수 없음. 단, [[STUN]]은 남아있음"],
      en: ["Jax's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
    },
  },
};
