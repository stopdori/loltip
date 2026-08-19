// app/data/matchups/annie/annie_rakan.ts
import type { MatchupSummary } from "../_types";

export const annie_rakan: MatchupSummary = {
  champs: ["annie", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 라칸 W, E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 라칸 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Rakan's W and E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Rakan's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Rakan's W [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
