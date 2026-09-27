// app/data/matchups/lissandra/lissandra_rell.ts
import type { MatchupSummary } from "../_types";

export const lissandra_rell: MatchupSummary = {
  champs: ["lissandra", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 렐 승마폼 W의 [[DASH]] / 낙마폼 E의 [[EMPOWERED]] [[BA]]의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 렐 승마폼 W의 [[DASH]] / 낙마폼 E의 [[EMPOWERED]] [[BA]]의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "렐 Q의 [[STUN]], R의 [[GRAB]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 E의 [[EMPOWERED]] [[BA]]의 [[GRAB]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Rell's Mounted Form W [[DASH]] / Dismounted Form E [[EMPOWERED]] [[BA]] [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Rell's Mounted Form W [[DASH]] / Dismounted Form E [[EMPOWERED]] [[BA]] [[DASH]]. [[EXIST]]", 
        "When hit by Rell's Q [[STUN]] or R [[GRAB]] / Mounted Form W [[AIRBORNE]] / Dismounted Form E [[EMPOWERED]] [[BA]] [[GRAB]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    rell: {
      ko: [],
      en: [],
    },
  },
};
