// app/data/matchups/annie/annie_ornn.ts
import type { MatchupSummary } from "../_types";

export const annie_ornn: MatchupSummary = {
  champs: ["annie", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 오른 E, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["P [[STUN]] cannot interrupt Ornn's E and R2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    ornn: {
      ko: ["E, R2의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Ornn's E and R2 [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
