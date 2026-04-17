// app/data/matchups/amumu/amumu_twistedfate.ts
import type { MatchupSummary } from "../_types";

export const amumu_twistedfate: MatchupSummary = {
  champs: ["amumu", "twistedfate"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q, R의 [[STUN]]로 트페 R2의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 트페 W(골카)의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음."],
      en: ["Amumu's Q and R [[STUN]] can interrupt Twisted Fate's R2 [[SKILL_CHANNEL]].", "Amumu's Q [[CC_BUFFER]] can ignore Twisted Fate's W (Gold Card) [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    twistedfate: {
      ko: [],
      en: [],
    },
  },
};
