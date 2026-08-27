// app/data/matchups/cassiopeia/cassiopeia_rell.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_rell: MatchupSummary = {
  champs: ["cassiopeia", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 렐 승마폼 W의 [[DASH]], 낙마폼 W의 [[EMPOWERED]] [[BA]] [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Rell's Mounted Form W [[DASH]], or the [[EMPOWERED]] [[BA]] [[DASH]] from Dismounted Form W. \n However, the [[STUN]] still applies."],
    },
    rell: {
      ko: ["승마폼 W는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음. \n 단, 낙마폼 W의 [[EMPOWERED]] [[BA]] [[DASH]]은 정상 작동."],
      en: ["Mounted Form W [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]. \n However, Dismounted Form W's [[EMPOWERED]] [[BA]] [[DASH]] still functions normally."],
    },
  },
};
