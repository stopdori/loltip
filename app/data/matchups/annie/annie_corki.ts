// app/data/matchups/annie/annie_corki.ts
import type { MatchupSummary } from "../_types";

export const annie_corki: MatchupSummary = {
  champs: ["annie", "corki"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 코르키 W(발키리)의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R로 [[SUMMON]]된 티버로 코르키 R의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, R의 폭발 [[AOE]] 피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Corki's W(Valkyrie) [[DASH]]. \n However, the [[STUN]] still applies.", "R [[SUMMON]]ed Tibbers can block Corki's R [[SINGLE]] [[PROJECTILE]]. \n However, R's explosion [[AOE]] damage cannot be blocked."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
