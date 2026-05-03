// app/data/matchups/belveth/belveth_rammus.ts
import type { MatchupSummary } from "../_types";

export const belveth_rammus: MatchupSummary = {
  champs: ["belveth", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 람머스 Q의 [[TRANSFORM]]을 끊을 수 있음.",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 람머스 Q, R의 [[AIRBORNE]], E의 [[TAUNT]]로 끊기지 않음. \n 단, [[AIRBORNE]], [[TAUNT]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Rammus's Q [[TRANSFORM]].",
        "Bel'Veth's R is instant with [[TIMING_AFTERCAST]], so it cannot be interrupted by Rammus's Q and R [[AIRBORNE]] or E [[TAUNT]]. \n However, [[AIRBORNE]] and [[TAUNT]] still apply."],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
