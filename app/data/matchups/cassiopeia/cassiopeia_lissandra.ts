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
      ko: ["카시오페아 W의 [[GROUNDED]], R의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]] \n 단, W의 [[GROUNDED]]의 영향을 받을 때 리산드라 E1은 사용할 수 있음. [[EXIST]]"],
      en: ["E2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, E1 can still be used."],
    },
  },
};
