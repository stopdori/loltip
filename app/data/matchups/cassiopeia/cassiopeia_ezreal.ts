// app/data/matchups/cassiopeia/cassiopeia_ezreal.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ezreal: MatchupSummary = {
  champs: ["cassiopeia", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [""],
      en: [""],
    },
    ezreal: {
      ko: ["E는 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음.", 
        "E의 [[CC_BUFFER]]로 카시오페아 R의 [[STUN]]을 무시하고 [[BLINK]] 할 수 있음. \n 단, [[STUN]]은 남아있음."
      ],
      en: ["E [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
