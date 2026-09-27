// app/data/matchups/lissandra/lissandra_nunu.ts
import type { MatchupSummary } from "../_types";

export const lissandra_nunu: MatchupSummary = {
  champs: ["lissandra", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]], R의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "R의 [[STUN]]로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 누누 R은 끊길 때 모았던 만큼의 [[SKILL_CHANNEL]]은 발사.", 
      "W의 [[ROOT]]으로 누누와 월럼프 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
      "누누와 월럼프 W의 [[AIRBORNE]], E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] and R [[STUN]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL]] [[DASH]]. [[EXIST]]", 
        "R [[STUN]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL]] [[DASH]] and R [[SKILL_CHANNEL]]. [[EXIST]] \n However, when interrupted, Nunu's R still fires the [[SKILL_CHANNEL]] charged up to that point.", 
        "W [[ROOT]] cannot interrupt Nunu & Willump's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "When hit by Nunu & Willump's W [[AIRBORNE]] or E [[ROOT]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
