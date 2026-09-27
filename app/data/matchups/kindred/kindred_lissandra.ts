// app/data/matchups/kindred/kindred_lissandra.ts
import type { MatchupSummary } from "../_types";

export const kindred_lissandra: MatchupSummary = {
  champs: ["kindred", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kindred: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 킨드레드 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Kindred's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Kindred's Q [[DASH]]. [[EXIST]]"],
    },
  },
};
