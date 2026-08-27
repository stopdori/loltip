// app/data/matchups/cassiopeia/cassiopeia_sett.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_sett: MatchupSummary = {
  champs: ["cassiopeia", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    sett: {
      ko: ["R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
