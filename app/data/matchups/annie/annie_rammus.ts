// app/data/matchups/annie/annie_rammus.ts
import type { MatchupSummary } from "../_types";

export const annie_rammus: MatchupSummary = {
  champs: ["annie", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 람머스 Q의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["P [[STUN]] can interrupt Rammus's Q [[TRANSFORM]]."],
    },
    rammus: {
      ko: ["Q의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음."],
      en: ["Rammus's Q [[KNOCKBACK]] can knock back Annie's R [[SUMMON]]ed Tibbers."],
    },
  },
};
