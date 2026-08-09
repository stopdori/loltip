// app/data/matchups/annie/annie_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const annie_caitlyn: MatchupSummary = {
  champs: ["annie", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 케이틀린(케틀) E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 케틀 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
