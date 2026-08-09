// app/data/matchups/ashe/ashe_shen.ts
import type { MatchupSummary } from "../_types";

export const ashe_shen: MatchupSummary = {
  champs: ["ashe", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Shen's R [[SKILL_CHANNEL]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
