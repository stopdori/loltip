// app/data/matchups/cassiopeia/cassiopeia_lucian.ts
import type { MatchupSummary } from "../_types";

export const cassiopeia_lucian: MatchupSummary = {
  champs: ["cassiopeia", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    cassiopeia: {
      ko: ["R의 [[STUN]]로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["R [[STUN]] can interrupt Lucian's R [[SKILL_CHANNEL]].",
        "R [[STUN]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    lucian: {
      ko: ["E는 [[DASH]] 판정으로 카시오페아 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: ["E [[DASH]] cannot be used while affected by Cassiopeia's W [[GROUNDED]]."],
    },
  },
};
