// app/data/matchups/belveth/belveth_taliyah.ts
import type { MatchupSummary } from "../_types";

export const belveth_taliyah: MatchupSummary = {
  champs: ["belveth", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 탈리야 W, R의 [[KNOCKBACK]] / E의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Taliyah's R [[SKILL_CHANNEL]].",
        "Bel'Veth's R has instant cast and [[TIMING_AFTERCAST]], so it cannot be interrupted by Taliyah's W and R [[KNOCKBACK]] / E [[STUN]]. \n However, the [[STUN]] still applies."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
