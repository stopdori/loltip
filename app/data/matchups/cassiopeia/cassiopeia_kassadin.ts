// app/data/matchups/cassiopeia/cassiopeia_kassadin.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_kassadin: MatchupSummary = {
  champs: ["cassiopeia", "kassadin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 카사딘 R의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Kassadin's R [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    kassadin: {
      ko: ["R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
