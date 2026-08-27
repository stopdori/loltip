// app/data/matchups/cassiopeia/cassiopeia_lissandra.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_lissandra: MatchupSummary = {
  champs: ["cassiopeia", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["E2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, E1은 사용할 수 있음."],
      en: ["E2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, E1 can still be used."],
    },
  },
};
