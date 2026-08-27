// app/data/matchups/cassiopeia/cassiopeia_zac.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_zac: MatchupSummary = {
  champs: ["cassiopeia", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["W의 [[GROUNDED]], R의 [[STUN]]로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["W [[GROUNDED]] and R [[STUN]] can interrupt Zac's E [[SKILL_CHANNEL]].",
        "R [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    zac: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
