// app/data/matchups/lissandra/lissandra_vladimir.ts
import type { MatchupSummary } from "../_types";

export const lissandra_vladimir: MatchupSummary = {
  champs: ["lissandra", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]] \n 단, 끊길 때 모았던 만큼의 [[SKILL_CHARGED]]은 발사.", ],
      en: ["W [[ROOT]] cannot interrupt Vladimir's E [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Vladimir's E [[SKILL_CHARGED]]. [[EXIST]] \n However, the [[SKILL_CHARGED]] charged up until the moment of interruption is still released."],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
