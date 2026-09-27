// app/data/matchups/lissandra/lissandra_locke.ts
import type { MatchupSummary } from "../_types";

export const lissandra_locke: MatchupSummary = {
  champs: ["lissandra", "locke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 로크 E2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 로크 E2의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Locke's E2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Locke's E2 [[DASH]]. [[EXIST]]"],
    },
    locke: {
      ko: [],
      en: [],
    },
  },
};
