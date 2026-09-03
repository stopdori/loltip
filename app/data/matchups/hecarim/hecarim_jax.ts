// app/data/matchups/hecarim/hecarim_jax.ts
import type { MatchupSummary } from "../_types";

export const hecarim_jax: MatchupSummary = {
  champs: ["hecarim", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 잭스 E의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Jax's Q [[DASH]].",
        "R [[UNSTOPPABLE]] can ignore Jax's E [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
