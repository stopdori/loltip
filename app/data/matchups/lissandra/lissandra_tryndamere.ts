// app/data/matchups/lissandra/lissandra_tryndamere.ts
import type { MatchupSummary } from "../_types";

export const lissandra_tryndamere: MatchupSummary = {
  champs: ["lissandra", "tryndamere"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 트린다미어 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 트린다미어 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Tryndamere's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Tryndamere's E [[DASH]]. [[EXIST]]"],
    },
    tryndamere: {
      ko: [],
      en: [],
    },
  },
};
