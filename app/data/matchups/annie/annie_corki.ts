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
        "R(티버)의 [[SUMMON]]으로 코르키 R의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음. \n 단, R의 추가 [[AOE]]피해는 막을 수 없음."],
      en: ["P [[STUN]] cannot interrupt Corki's W(Valkyrie) [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Corki's R [[SINGLE]] [[PROJECTILE]]. \n However, R's additional [[AOE]] damage cannot be blocked."],
    },
    corki: {
      ko: [],
      en: [],
    },
  },
};
