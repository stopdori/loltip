// app/data/matchups/cassiopeia/cassiopeia_nidalee.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_nidalee: MatchupSummary = {
  champs: ["cassiopeia", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    nidalee: {
      ko: ["쿠거폼 W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Cougar Form W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
