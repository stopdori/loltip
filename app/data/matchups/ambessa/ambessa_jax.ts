// app/data/matchups/ambessa/ambessa_jax.ts
import type { MatchupSummary } from "../_types";

export const ambessa_jax: MatchupSummary = {
  champs: ["ambessa", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음.", 
        "암베사 R의 [[UNSTOPPABLE]]로 잭스 E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Jax's Q [[DASH]].", "Ambessa's R [[UNSTOPPABLE]] can ignore Jax's E [[STUN]]. \n However, the [[STUN]] still applies after [[UNSTOPPABLE]] ends."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
