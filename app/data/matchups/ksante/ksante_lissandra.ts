// app/data/matchups/ksante/ksante_lissandra.ts
import type { MatchupSummary } from "../_types";

export const ksante_lissandra: MatchupSummary = {
  champs: ["ksante", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ksante: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 크산테 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 크산테 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "크산테 Q3의 [[AIRBORNE]], W의 [[KNOCKBACK]], R의 [[SUPPRESS]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
