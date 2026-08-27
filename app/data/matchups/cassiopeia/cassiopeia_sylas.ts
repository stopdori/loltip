// app/data/matchups/cassiopeia/cassiopeia_sylas.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_sylas: MatchupSummary = {
  champs: ["cassiopeia", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    sylas: {
      ko: ["W, E1, E2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W, E1, and E2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
