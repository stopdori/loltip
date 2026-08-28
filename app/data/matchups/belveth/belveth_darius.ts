// app/data/matchups/belveth/belveth_darius.ts
import type { MatchupSummary } from "../_types";

export const belveth_darius: MatchupSummary = {
  champs: ["belveth", "darius"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 다리우스 E의 [[GRAB]]으로 끊기지 않음. \n 단, [[GRAB]]은 남아있음."],
      en: ["Bel'Veth's R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Darius's E [[GRAB]]. \n However, the [[GRAB]] still applies."],
    },
    darius: {
      ko: ["E의 [[GRAB]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E [[GRAB]] can interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]]."],
    },
  },
};
