// app/data/matchups/annie/annie_quinn.ts
import type { MatchupSummary } from "../_types";

export const annie_quinn: MatchupSummary = {
  champs: ["annie", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["애니 P의 [[STUN]]로 퀸 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애니 P의 [[STUN]]로 퀸 R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Quinn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Annie's P [[STUN]] can interrupt Quinn's R [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
