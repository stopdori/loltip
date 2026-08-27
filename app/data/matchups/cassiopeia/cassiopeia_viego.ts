// app/data/matchups/cassiopeia/cassiopeia_viego.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_viego: MatchupSummary = {
  champs: ["cassiopeia", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "R의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can interrupt Viego's W [[SKILL_CHARGED]].",
        "R [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    viego: {
      ko: ["W는 [[DASH]], R은 [[BLINK]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["W [[DASH]] / R [[BLINK]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
