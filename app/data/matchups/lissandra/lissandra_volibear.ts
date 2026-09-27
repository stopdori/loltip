// app/data/matchups/lissandra/lissandra_volibear.ts
import type { MatchupSummary } from "../_types";

export const lissandra_volibear: MatchupSummary = {
  champs: ["lissandra", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 볼리베어 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "W의 [[ROOT]], R의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음. [[EXIST]] \n 단, 볼리베어 Q는 [[CDR_RESET]].", 
      "볼리베어 Q의 [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Volibear's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Volibear's Q [[DASH]]. [[EXIST]]", 
        "W [[ROOT]] and R [[STUN]] can cancel Volibear's Q [[TRANSFORM]]. [[EXIST]] \n However, Volibear's Q [[CDR_RESET]].", 
        "When hit by Volibear's Q [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    volibear: {
      ko: ["R의 [[UNSTOPPABLE]]로 리산드라 W의 [[ROOT]], R의 [[STUN]]을 무시할 수 있음. [[EXIST]] \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]], [[STUN]]은 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Lissandra's W [[ROOT]] and R [[STUN]]. [[EXIST]] \n However, the [[ROOT]] and [[STUN]] still apply after [[UNSTOPPABLE]] ends."],
    },
  },
};
