// app/data/matchups/annie/annie_xerath.ts
import type { MatchupSummary } from "../_types";

export const annie_xerath: MatchupSummary = {
  champs: ["annie", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", "R로 [[SUMMON]]된 티버로 제라스 E의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, 티버에 [[STUN]]은 남아있음."],
      en: ["P [[STUN]] can interrupt Xerath's Q [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]].", "R [[SUMMON]]ed Tibbers can block Xerath's E [[SINGLE]] [[PROJECTILE]]. \n However, the [[STUN]] remains on Tibbers."],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
