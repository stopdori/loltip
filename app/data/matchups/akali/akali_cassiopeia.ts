// app/data/matchups/akali/akali_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const akali_cassiopeia: MatchupSummary = {
  champs: ["akali", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E1, E2, R1, R2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E1, E2, R1, and R2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Akali's E1, E2, R1, or R2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
