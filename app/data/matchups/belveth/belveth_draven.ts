// app/data/matchups/belveth/belveth_draven.ts
import type { MatchupSummary } from "../_types";

export const belveth_draven: MatchupSummary = {
  champs: ["belveth", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 드레이븐 E의 [[AIRBORNE]]으로 끊기지 않음. \n 단, [[AIRBORNE]]은 남아있음."],
      en: [""],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 벨베스 Q의 [[DASH]], E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Bel'Veth's Q [[DASH]] and E [[SKILL_CHANNEL]]."],
    },
  },
};
