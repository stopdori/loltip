// app/data/matchups/annie/annie_yuumi.ts
import type { MatchupSummary } from "../_types";

export const annie_yuumi: MatchupSummary = {
  champs: ["annie", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "R로 [[SUMMON]]된 티버로 유미 Q의 [[SINGLE]] [[PROJECTILE]]를 막을 수 있음."],
      en: ["P [[STUN]] can interrupt Yuumi's W [[DASH]].", "R [[SUMMON]]ed Tibbers can block Yuumi's Q [[SINGLE]] [[PROJECTILE]]."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
