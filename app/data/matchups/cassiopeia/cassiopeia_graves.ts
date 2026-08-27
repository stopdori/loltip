// app/data/matchups/cassiopeia/cassiopeia_graves.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_graves: MatchupSummary = {
  champs: ["cassiopeia", "graves"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 그레이브즈 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Graves's E and R [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    graves: {
      ko: ["E, R은 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E and R [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
