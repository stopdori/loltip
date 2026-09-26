// app/data/matchups/anivia/anivia_lissandra.ts
import type { MatchupSummary } from "../_types";

export const anivia_lissandra: MatchupSummary = {
  champs: ["anivia", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]]", 
        "R의 [[STUN]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
