// app/data/matchups/karthus/karthus_lissandra.ts
import type { MatchupSummary } from "../_types";

export const karthus_lissandra: MatchupSummary = {
  champs: ["karthus", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    karthus: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 카서스 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Karthus's R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Karthus's R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
  },
};
