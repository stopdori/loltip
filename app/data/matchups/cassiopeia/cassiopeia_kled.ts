// app/data/matchups/cassiopeia/cassiopeia_kled.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_kled: MatchupSummary = {
  champs: ["cassiopeia", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] cannot interrupt Kled's mounted form E / dismounted form Q [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    kled: {
      ko: ["승마폼 E, 낙마폼 Q는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["Mounted form E and dismounted form Q [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
