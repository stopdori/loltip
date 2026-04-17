// app/data/matchups/amumu/amumu_jax.ts
import type { MatchupSummary } from "../_types";

export const amumu_jax: MatchupSummary = {
  champs: ["amumu", "jax"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[STUN]]로 잭스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음. \n 단, 아무무 Q의 [[HOMING]] [[DASH]]으로 잭스 Q의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 R의 [[STUN]]로 잭스 Q의 [[DASH]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 잭스 E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q [[STUN]] cannot interrupt Jax's Q [[DASH]]. \n However, the [[STUN]] still applies. \n However, Amumu's Q [[HOMING]] [[DASH]] can follow Jax's Q [[DASH]].", "Amumu's R [[STUN]] can interrupt Jax's Q [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Jax's E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    jax: {
      ko: [],
      en: [],
    },
  },
};
