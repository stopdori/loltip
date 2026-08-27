// app/data/matchups/chogath/chogath_jax.ts
import type { MatchupSummary } from "../_types";

export const chogath_jax: MatchupSummary = {
  champs: ["chogath", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 잭스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Jax's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Jax's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
