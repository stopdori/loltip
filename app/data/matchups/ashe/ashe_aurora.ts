// app/data/matchups/ashe/ashe_aurora.ts
import type { MatchupSummary } from "../_types";

export const ashe_aurora: MatchupSummary = {
  champs: ["ashe", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 오로라 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Aurora's W or E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]으로 애쉬 R의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: [],
    },
  },
};
