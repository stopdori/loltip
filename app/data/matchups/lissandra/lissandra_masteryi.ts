// app/data/matchups/lissandra/lissandra_masteryi.ts
import type { MatchupSummary } from "../_types";

export const lissandra_masteryi: MatchupSummary = {
  champs: ["lissandra", "masteryi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 마스터 이 W의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 마스터 이 W의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Master Yi's W [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Master Yi's W [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    masteryi: {
      ko: [],
      en: [],
    },
  },
};
