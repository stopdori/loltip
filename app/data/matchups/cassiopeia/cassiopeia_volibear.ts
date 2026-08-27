// app/data/matchups/cassiopeia/cassiopeia_volibear.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_volibear: MatchupSummary = {
  champs: ["cassiopeia", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음.",
        "R의 [[STUN]]로 볼리베어 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can cancel Volibear's Q [[TRANSFORM]].",
        "R [[STUN]] cannot interrupt Volibear's Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    volibear: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
