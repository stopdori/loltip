// app/data/matchups/annie/annie_aurora.ts
import type { MatchupSummary } from "../_types";

export const annie_aurora: MatchupSummary = {
  champs: ["annie", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Aurora's W and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 애니 P의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
