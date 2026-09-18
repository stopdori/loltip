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
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]]) [[KNOCKDOWN]] can interrupt Jax's Q [[DASH]]. [[EXIST]]"],
    },
    jax: {
      ko: ["잭스 E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음."],
      en: ["Jax's E [[STUN]] cannot interrupt Ahri's R [[DASH]]. However, the [[STUN]] still applies."],
    },
  },
};
