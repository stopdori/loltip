// app/data/matchups/cassiopeia/cassiopeia_reksai.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_reksai: MatchupSummary = {
  champs: ["cassiopeia", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Rek'Sai's Burrowed Form E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    reksai: {
      ko: ["매복폼 E / R는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Burrowed Form E / R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
