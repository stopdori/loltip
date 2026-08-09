// app/data/matchups/annie/annie_shen.ts
import type { MatchupSummary } from "../_types";

export const annie_shen: MatchupSummary = {
  champs: ["annie", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Shen's R [[SKILL_CHANNEL]]."],
    },
    shen: {
      ko: [],
      en: [],
    },
  },
};
