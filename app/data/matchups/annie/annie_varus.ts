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
        "R(티버)의 [[SUMMON]]으로 바루스 R의 [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]를 막을 수 없음."],
      en: ["P [[STUN]] can interrupt Varus's Q [[SKILL_CHARGED]].", "R(Tibbers) [[SUMMON]] cannot block Varus's R [[SINGLE]] [[PIERCE_MINION]] [[PROJECTILE]]."],
    },
    varus: {
      ko: [],
      en: [],
    },
  },
};
