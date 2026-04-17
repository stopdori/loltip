// app/data/matchups/anivia/anivia_jax.ts
import type { MatchupSummary } from "../_types";

export const anivia_jax: MatchupSummary = {
  champs: ["anivia", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]]로 잭스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["Anivia's Q [[STUN]] cannot interrupt Jax's Q [[DASH]]. \n However, [[STUN]] still applies.", "Anivia's W [[TERRAIN]] [[AIRBORNE]] can interrupt Jax's Q [[DASH]]."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
