// app/data/matchups/lissandra/lissandra_yuumi.ts
import type { MatchupSummary } from "../_types";

export const lissandra_yuumi: MatchupSummary = {
  champs: ["lissandra", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 유미 R(탈착)의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "W의 [[ROOT]], R의 [[STUN]]로 유미 W의 [[DASH]], R(탈착)의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[STUN]]로 유미 R(탈착)의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [""],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
