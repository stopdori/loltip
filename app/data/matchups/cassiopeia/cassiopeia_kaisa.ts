// app/data/matchups/cassiopeia/cassiopeia_kaisa.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_kaisa: MatchupSummary = {
  champs: ["cassiopeia", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 카이사 R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Kai'Sa's R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    kaisa: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
