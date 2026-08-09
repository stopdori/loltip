// app/data/matchups/annie/annie_aurelionsol.ts
import type { MatchupSummary } from "../_types";

export const annie_aurelionsol: MatchupSummary = {
  champs: ["annie", "aurelionsol"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 아우렐리온 솔 Q, W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R(티버)의 [[SUMMON]]으로 아우렐리온 솔 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, Q의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] can interrupt Aurelion Sol's Q and W [[SKILL_CHANNEL]].", "R(Tibbers) [[SUMMON]] can block Aurelion Sol's Q [[SINGLE]] [[PROJECTILE]]. \n However, Q's additional [[AOE]] damage cannot be blocked."],
    },
    aurelionsol: {
      ko: [],
      en: [],
    },
  },
};
