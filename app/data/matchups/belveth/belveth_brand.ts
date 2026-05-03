// app/data/matchups/belveth/belveth_brand.ts
import type { MatchupSummary } from "../_types";

export const belveth_brand: MatchupSummary = {
  champs: ["belveth", "brand"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 브랜드 Q의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Brand's Q [[STUN]]. \n However, the [[STUN]] still applies."],
    },
    brand: {
      ko: ["브랜드 Q의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "브랜드 Q의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Brand's Q [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Brand's Q [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]]."],
    },
  },
};
