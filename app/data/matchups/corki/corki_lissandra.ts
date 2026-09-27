// app/data/matchups/corki/corki_lissandra.ts
import type { MatchupSummary } from "../_types";

export const corki_lissandra: MatchupSummary = {
  champs: ["corki", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    corki: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 코르키 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 코르키 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Corki's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Corki's W [[DASH]]. [[EXIST]]"],
    },
  },
};
