// app/data/matchups/annie/annie_varus.ts
import type { MatchupSummary } from "../_types";

export const annie_varus: MatchupSummary = {
  champs: ["annie", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 바루스 R의 [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]를 막을 수 없음."],
      en: ["P [[STUN]] can interrupt Varus's Q [[SKILL_CHARGED]].", "R [[SUMMON]]ed Tibbers cannot block Varus's R [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
