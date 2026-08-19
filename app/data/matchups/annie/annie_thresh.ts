// app/data/matchups/annie/annie_thresh.ts
import type { MatchupSummary } from "../_types";

export const annie_thresh: MatchupSummary = {
  champs: ["annie", "thresh"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 쓰레쉬 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "R로 [[SUMMON]]된 티버로 쓰레쉬 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 쓰레쉬가 Q2를 사용할 수 있음."],
      en: ["P [[STUN]] cannot interrupt Thresh's Q2 and W [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Thresh's Q [[SINGLE]] [[PROJECTILE]]. \n However, Thresh can still use Q2."],
    },
    thresh: {
      ko: ["Q의 [[GRAB]], E의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[GRAB]], [[AIRBORNE]] 할 수 있음."],
      en: ["Thresh's Q [[GRAB]] and E [[AIRBORNE]] can grab Annie's R [[SUMMON]]ed Tibbers or send it airborne."],
    },
  },
};
