// app/data/matchups/lissandra/lissandra_nidalee.ts
import type { MatchupSummary } from "../_types";

export const lissandra_nidalee: MatchupSummary = {
  champs: ["lissandra", "nidalee"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 니달리 쿠거폼 W의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Nidalee's Cougar Form W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Nidalee's Cougar Form W [[DASH]]. [[EXIST]]"],
    },
    nidalee: {
      ko: [],
      en: [],
    },
  },
};
