// app/data/matchups/alistar/alistar_jax.ts
import type { MatchupSummary } from "../_types";

export const alistar_jax: MatchupSummary = {
  champs: ["alistar", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음.", 
        "알리스타 E의 [[STUN]]로 잭스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 잭스 E의 [[STUN]]을 해제할 수 있음."],
      en: ["Alistar's Q and W can interrupt Jax's Q", "Alistar's E [[STUN]] cannot interrupt Jax's Q. However, the [[STUN]] still applies.", "Alistar's R [[CC_CLEANSE]] can cleanse Jax's E [[STUN]]"],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
