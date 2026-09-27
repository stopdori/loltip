// app/data/matchups/aatrox/aatrox_lissandra.ts
import type { MatchupSummary } from "../_types";

export const aatrox_lissandra: MatchupSummary = {
  champs: ["aatrox", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: [],
      en: [],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 아트록스 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "아트록스 Q의 [[AIRBORNE]], W의 [[GRAB]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Aatrox's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Aatrox's E [[DASH]]. [[EXIST]]", 
        "When hit by Aatrox's Q [[AIRBORNE]] or W [[GRAB]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
