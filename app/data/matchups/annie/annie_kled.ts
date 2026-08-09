// app/data/matchups/annie/annie_kled.ts
import type { MatchupSummary } from "../_types";

export const annie_kled: MatchupSummary = {
  champs: ["annie", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R(티버)의 [[SUMMON]]으로 클레드 낙마폼 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] cannot interrupt Kled's Mounted Form E or Dismounted Form Q [[DASH]]. \n However, the [[STUN]] still applies.", "R(Tibbers) [[SUMMON]] can block Kled's Dismounted Form Q [[SINGLE]] [[PROJECTILE]]."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
