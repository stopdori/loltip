// app/data/matchups/cassiopeia/cassiopeia_shaco.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_shaco: MatchupSummary = {
  champs: ["cassiopeia", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 샤코 Q의 [[BLINK]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Shaco's Q [[BLINK]]. \n However, the [[STUN]] still applies."],
    },
    shaco: {
      ko: ["Q는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Q [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
