// app/data/matchups/cassiopeia/cassiopeia_malphite.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_malphite: MatchupSummary = {
  champs: ["cassiopeia", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    malphite: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", 
        "R의 [[UNSTOPPABLE]]로 카시오페아 R의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]].",
        "R [[UNSTOPPABLE]] can ignore Cassiopeia's R [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
