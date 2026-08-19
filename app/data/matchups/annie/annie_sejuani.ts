// app/data/matchups/annie/annie_sejuani.ts
import type { MatchupSummary } from "../_types";

export const annie_sejuani: MatchupSummary = {
  champs: ["annie", "sejuani"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 세주아니 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 세주아니 R의 [[PIERCE_MINION]] [[PROJECTILE]]를 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Sejuani's Q [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers cannot block Sejuani's R [[PIERCE_MINION]] [[PROJECTILE]]."],
    },
    sejuani: {
      ko: ["Q의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음."],
      en: ["Sejuani's Q [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne."],
    },
  },
};
