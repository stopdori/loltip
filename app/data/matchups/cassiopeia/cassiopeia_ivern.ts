// app/data/matchups/cassiopeia/cassiopeia_ivern.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_ivern: MatchupSummary = {
  champs: ["cassiopeia", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 아이번 Q2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Ivern's Q2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ivern: {
      ko: ["Q2는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, Q1은 사용할 수 있음. \n 단, Q1의 [[BA]] 공격으로 인한 [[DASH]] 효과 또한 발동하지 않음."],
      en: ["Q2 [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Q1 can still be used. \n However, the [[DASH]] effect from Q1's [[BA]] attack also does not trigger."],
    },
  },
};
