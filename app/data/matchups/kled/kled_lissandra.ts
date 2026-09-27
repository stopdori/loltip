// app/data/matchups/kled/kled_lissandra.ts
import type { MatchupSummary } from "../_types";

export const kled_lissandra: MatchupSummary = {
  champs: ["kled", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kled: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 클레드 승마폼 E / 낙마폼 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "클레드 승마폼 Q의 [[GRAB]], R의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Kled's Mounted Form E / Dismounted Form Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Kled's Mounted Form E / Dismounted Form Q [[DASH]]. [[EXIST]]", 
        "When hit by Kled's Mounted Form Q [[GRAB]] or R [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
