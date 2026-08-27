// app/data/matchups/cassiopeia/cassiopeia_nocturne.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_nocturne: MatchupSummary = {
  champs: ["cassiopeia", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: [],
      en: [],
    },
    nocturne: {
      ko: ["R2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, R1은 사용할 수 있음. \n 단, W를 사용해서 [[SPELL_SHIELD]] 효과를 받아도 R2를 사용할 수 없음."],
      en: ["R2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, R1 can still be used. \n However, using W to gain [[SPELL_SHIELD]] still does not allow R2 to be used."],
    },
  },
};
