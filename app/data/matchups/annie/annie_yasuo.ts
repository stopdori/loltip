// app/data/matchups/annie/annie_yasuo.ts
import type { MatchupSummary } from "../_types";

export const annie_yasuo: MatchupSummary = {
  champs: ["annie", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: [],
      en: [],
    },
    yasuo: {
      ko: ["Q3, R의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음.", 
        "W의 [[WINDSHIELD]]으로 애니 Q의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's Q3 and R [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne.",
        "Yasuo's W [[WINDSHIELD]] can block Annie's Q [[PROJECTILE]]."],
    },
  },
};
