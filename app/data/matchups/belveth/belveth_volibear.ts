// app/data/matchups/belveth/belveth_volibear.ts
import type { MatchupSummary } from "../_types";

export const belveth_volibear: MatchupSummary = {
  champs: ["belveth", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. \n 단, 볼리베어 Q는 [[CDR_RESET]].",
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 볼리베어 Q의 [[STUN]]로 끊기지 않음. \n 단, [[STUN]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can cancel Volibear's Q [[TRANSFORM]]. \n However, Volibear's Q has [[CDR_RESET]].",
        "Bel'Veth's R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Volibear's Q [[STUN]]. \n However, the [[STUN]] remains."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
