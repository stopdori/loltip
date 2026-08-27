// app/data/matchups/cassiopeia/cassiopeia_kalista.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_kalista: MatchupSummary = {
  champs: ["cassiopeia", "kalista"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 칼리스타 P의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Kalista's P [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    kalista: {
      ko: ["P는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, P는 [[DASH]] 대신 그냥 걸어다님.",
        "[[TIP]]R1, R2는 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 있음."],
      en: ["P [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, instead of the [[DASH]], P just walks normally.",
        "[[TIP]]R1 and R2 can still be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
