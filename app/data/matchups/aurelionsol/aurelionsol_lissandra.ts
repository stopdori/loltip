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
      en: ["W [[ROOT]] cannot interrupt Aurelion Sol's Q [[SKILL_CHANNEL]]. [[NOT_EXIST]]", 
        "W [[ROOT]] can interrupt Aurelion Sol's W [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Aurelion Sol's Q [[SKILL_CHANNEL]] and W [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]]", 
        "When hit by Aurelion Sol's R [[STUN]] or [[EMPOWERED]] R (Falling Star) [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
