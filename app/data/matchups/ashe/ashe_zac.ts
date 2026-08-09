// app/data/matchups/ashe/ashe_zac.ts
import type { MatchupSummary } from "../_types";

export const ashe_zac: MatchupSummary = {
  champs: ["ashe", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["R의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[STUN]]로 자크 E의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[STUN]] can interrupt Zac's E [[SKILL_CHANNEL]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
