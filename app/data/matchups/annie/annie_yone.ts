// app/data/matchups/annie/annie_yone.ts
import type { MatchupSummary } from "../_types";

export const annie_yone: MatchupSummary = {
  champs: ["annie", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Yone's Q3 and E1 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    yone: {
      ko: ["Q3, R의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Yone's Q3 and R [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
