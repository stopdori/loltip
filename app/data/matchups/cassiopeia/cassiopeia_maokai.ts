// app/data/matchups/cassiopeia/cassiopeia_maokai.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_maokai: MatchupSummary = {
  champs: ["cassiopeia", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    maokai: {
      ko: ["W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
