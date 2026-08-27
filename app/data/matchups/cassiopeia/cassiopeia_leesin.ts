// app/data/matchups/cassiopeia/cassiopeia_leesin.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_leesin: MatchupSummary = {
  champs: ["cassiopeia", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 리 신 Q2, W1의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Lee Sin's Q2 and W1 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    leesin: {
      ko: ["Q2, W1은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, Q1은 사용할 수 있음."],
      en: ["Q2 and W1 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Q1 can still be used."],
    },
  },
};
