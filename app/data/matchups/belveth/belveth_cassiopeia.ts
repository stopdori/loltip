// app/data/matchups/belveth/belveth_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const belveth_cassiopeia: MatchupSummary = {
  champs: ["belveth", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["Q, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.",
        "R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 카시오페아 R의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Q and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].", "R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Cassiopeia's R [[STUN]]. \n However, the [[STUN]] still applies."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 벨베스 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]].", "R [[STUN]] cannot interrupt Bel'Veth's Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
