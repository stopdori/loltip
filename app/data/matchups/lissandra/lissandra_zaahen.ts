// app/data/matchups/lissandra/lissandra_zaahen.ts
import type { MatchupSummary } from "../_types";

export const lissandra_zaahen: MatchupSummary = {
  champs: ["lissandra", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 자헨 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 자헨 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "자헨 Q의 [[AIRBORNE]] / W의 [[GRAB]], [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Zaahen's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Zaahen's E [[DASH]]. [[EXIST]]", 
        "When hit by Zaahen's Q [[AIRBORNE]] / W [[GRAB]] or [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    zaahen: {
      ko: [],
      en: [],
    },
  },
};
