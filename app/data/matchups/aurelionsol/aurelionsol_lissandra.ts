// app/data/matchups/aurelionsol/aurelionsol_lissandra.ts
import type { MatchupSummary } from "../_types";

export const aurelionsol_lissandra: MatchupSummary = {
  champs: ["aurelionsol", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurelionsol: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]]", 
        "W의 [[ROOT]]으로 아우렐리온 솔 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아우렐리온 솔 Q의 [[SKILL_CHANNEL]], W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "아우렐리온 솔 R의 [[STUN]], [[EMPOWERED]] R(천상강림)의 [[AIRBORNE]] 을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
