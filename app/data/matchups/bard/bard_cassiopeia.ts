// app/data/matchups/bard/bard_cassiopeia.ts
import type { MatchupSummary } from "../_types";

export const bard_cassiopeia: MatchupSummary = {
  champs: ["bard", "cassiopeia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["[[TIP]]E는 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 있음. \n 즉, [[GROUNDED]] 효과를 받는동안 터널을 만들 수는 있지만 탈 수 없음."],
      en: ["[[TIP]] E can still be used while affected by Cassiopeia's W [[GROUNDED]]. \n In other words, while [[GROUNDED]], Bard can create the tunnel but cannot ride through it."],
    },
    cassiopeia: {
      ko: ["R의 [[STUN]]로 바드 E(벽이동)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Bard's E (wall travel) [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
