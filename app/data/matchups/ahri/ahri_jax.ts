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
      ko: ["아리 E의 [[CHARM]]으로 잭스 Q를 끊을 수 있음.\n즉, 데미지도 무효.", "아리 E의 [[CHARM]]으로 잭스 E의 [[CAST_COMMIT]]을 끊을 수 없음."],
      en: ["Ahri's E can interrupt Jax's Q. The damage is also negated.", "Ahri's E [[CHARM]] cannot interrupt Jax's E [[CAST_COMMIT]]."],
    },
    jax: {
      ko: ["잭스 E의 [[STUN]]로 아리 R의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음"],
      en: ["Jax's E [[STUN]] cannot interrupt Ahri's R. However, the [[STUN]] still applies."],
    },
  },
};
