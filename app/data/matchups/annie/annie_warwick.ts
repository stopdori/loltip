// app/data/matchups/annie/annie_warwick.ts
import type { MatchupSummary } from "../_types";

export const annie_warwick: MatchupSummary = {
  champs: ["annie", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 워윅 Q, R의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "P의 [[STUN]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Warwick's Q and R [[DASH]]. \n However, the [[STUN]] still applies.", "P [[STUN]] can interrupt Warwick's R [[SKILL_CHANNEL]]."],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
