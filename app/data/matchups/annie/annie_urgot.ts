// app/data/matchups/annie/annie_urgot.ts
import type { MatchupSummary } from "../_types";

export const annie_urgot: MatchupSummary = {
  champs: ["annie", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 우르곳 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 우르곳 R의 [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]를 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Urgot's E [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers cannot block Urgot's R [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
