// app/data/matchups/annie/annie_riven.ts
import type { MatchupSummary } from "../_types";

export const annie_riven: MatchupSummary = {
  champs: ["annie", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Riven's Q and E [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    riven: {
      ko: ["Q3의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Riven's Q3 [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
