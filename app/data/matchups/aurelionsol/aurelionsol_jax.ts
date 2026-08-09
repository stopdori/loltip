// app/data/matchups/aurelionsol/aurelionsol_jax.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_jax: MatchupSummary = {
  champs: ["aurelionsol", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["R의 [[STUN]]으로 잭스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(천상강림)의 [[AIRBORNE]]으로 잭스 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Jax's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "R (Falling Star) [[AIRBORNE]] can interrupt Jax's Q [[DASH]]."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
