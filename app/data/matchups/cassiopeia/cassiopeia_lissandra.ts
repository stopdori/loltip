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
      en: ["When hit by Cassiopeia's W [[GROUNDED]] or R [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]] \n However, while affected by W [[GROUNDED]], Lissandra can still use E1. [[EXIST]]"],
    },
  },
};
