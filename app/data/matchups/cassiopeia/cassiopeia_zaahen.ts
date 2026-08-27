// app/data/matchups/cassiopeia/cassiopeia_zaahen.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_zaahen: MatchupSummary = {
  champs: ["cassiopeia", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 자헨 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Zaahen's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    zaahen: {
      ko: ["E, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
