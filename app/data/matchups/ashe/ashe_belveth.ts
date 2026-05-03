// app/data/matchups/ashe/ashe_belveth.ts
import type { MatchupSummary } from "../_types";

export const ashe_belveth: MatchupSummary = {
  champs: ["ashe", "belveth"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애쉬 R의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies.", "Ashe's R [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]]."],
    },
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 애쉬 Q의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Ashe's Q [[STUN]]. \n However, the [[STUN]] still applies."],
    },
  },
};
