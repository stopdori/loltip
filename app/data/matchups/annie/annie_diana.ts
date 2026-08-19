// app/data/matchups/annie/annie_diana.ts
import type { MatchupSummary } from "../_types";

export const annie_diana: MatchupSummary = {
  champs: ["annie", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Diana's E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 애니 R로 [[SUMMON]]된 티버를 [[GRAB]] 할 수 있음."],
      en: ["Diana's R [[GRAB]] can grab Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
