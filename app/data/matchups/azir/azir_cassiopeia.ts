// app/data/matchups/azir/azir_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const azir_cassiopeia: MatchupSummary = {
  champs: ["azir", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Azir's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
