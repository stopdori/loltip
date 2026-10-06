// app/data/matchups/jax/jax_mel.ts
import type { MatchupSummary } from "../_types";

export const jax_mel: MatchupSummary = {
  champs: ["jax", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jax: {
      ko: [""],
      en: [""],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 잭스 평타(일반, [[EMPOWERED]]), Q, W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
        "E의 [[ROOT]]으로 잭스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."
      ],
      en: ["W [[REFLECT]] cannot [[REFLECT]] Jax's basic attacks (normal, [[EMPOWERED]]), Q, W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Jax's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
