// app/data/matchups/anivia/anivia_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const anivia_tahmkench: MatchupSummary = {
  champs: ["anivia", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]으로 탐켄치 W의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "애니비아 W([[TERRAIN]])의 [[AIRBORNE]]으로 탐켄치 R(삼키기)을 끊을 수 없음."],
      en: ["Anivia's Q [[STUN]] and W [[TERRAIN]] [[AIRBORNE]] can interrupt Tahm Kench's W [[SKILL_CHANNEL]].", "Anivia's W [[TERRAIN]] [[AIRBORNE]] cannot interrupt Tahm Kench's R (Devour)."],
    },
    tahmkench: {
      ko: [],
      en: [],
    },
  },
};
