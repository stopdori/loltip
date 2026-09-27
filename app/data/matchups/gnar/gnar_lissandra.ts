// app/data/matchups/gnar/gnar_lissandra.ts
import type { MatchupSummary } from "../_types";

export const gnar_lissandra: MatchupSummary = {
  champs: ["gnar", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gnar: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 나르 미니폼 E / 메가폼 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
      "나르 메가폼 W의 [[STUN]] / R의 [[KNOCKBACK]] [[STUN]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Gnar's Mini form E / Mega form E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Gnar's Mini form E / Mega form E [[DASH]]. [[EXIST]]", 
        "When hit by Gnar's Mega form W [[STUN]] / R [[KNOCKBACK]] [[STUN]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
  },
};
