// app/data/matchups/cassiopeia/cassiopeia_riven.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_riven: MatchupSummary = {
  champs: ["cassiopeia", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Riven's Q and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    riven: {
      ko: ["Q, E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Q and E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
