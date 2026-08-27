// app/data/matchups/cassiopeia/cassiopeia_yone.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_yone: MatchupSummary = {
  champs: ["cassiopeia", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Yone's Q3 and E1 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    yone: {
      ko: ["Q3, E1, E2, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, E2는 지속시간이 다 되어도 [[GROUNDED]]를 받는동안 돌아가지 않음."],
      en: ["Q3, E1, E2, and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, even once E2's duration runs out, it will not return to Yone while affected by [[GROUNDED]]."],
    },
  },
};
