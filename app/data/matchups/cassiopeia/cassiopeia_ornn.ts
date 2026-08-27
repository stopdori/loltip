// app/data/matchups/cassiopeia/cassiopeia_ornn.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ornn: MatchupSummary = {
  champs: ["cassiopeia", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ornn's E and R2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ornn: {
      ko: ["E, R2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, R1은 사용할 수 있음."],
      en: ["E and R2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, R1 can still be used."],
    },
  },
};
