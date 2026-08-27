// app/data/matchups/aurelionsol/aurelionsol_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_cassiopeia: MatchupSummary = {
  champs: ["aurelionsol", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: ["W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]]."],
    },
  },
};
