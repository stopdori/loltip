// app/data/matchups/galio/galio_lissandra.ts
import type { MatchupSummary } from "../_types";

export const galio_lissandra: MatchupSummary = {
  champs: ["galio", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]]으로 갈리오 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 갈리오 W는 중단될 때 시전.", 
      "갈리오 W의 [[TAUNT]] / E, R의 [[AIRBORNE]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Galio's W [[SKILL_CHARGED]] and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "W [[ROOT]] can interrupt Galio's R [[SKILL_CHANNEL]]. [[EXIST]]", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Galio's W [[SKILL_CHARGED]], E [[DASH]], and R [[SKILL_CHANNEL]]. [[EXIST]] \n However, Galio's W still fires when interrupted.", 
        "When hit by Galio's W [[TAUNT]] / E or R [[AIRBORNE]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
