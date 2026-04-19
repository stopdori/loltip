// app/data/matchups/ashe/ashe_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const ashe_caitlyn: MatchupSummary = {
  champs: ["ashe", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["애쉬 R의 [[STUN]]로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "애쉬 R의 [[STUN]]로 케틀 R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ashe's R [[STUN]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[STUN]] still applies.", "Ashe's R [[STUN]] can interrupt Caitlyn's R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: [],
      en: [],
    },
  },
};
