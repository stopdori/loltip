// app/data/matchups/lissandra/lissandra_poppy.ts
import type { MatchupSummary } from "../_types";

export const lissandra_poppy: MatchupSummary = {
  champs: ["lissandra", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["W의 [[ROOT]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R [[STUN]]의 [[KNOCKDOWN]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]", 
      "뽀삐 E의 [[KNOCKBACK]], [[STUN]] / R의 [[AIRBORNE]], [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ROOT]] cannot interrupt Poppy's E [[DASH]] and R [[SKILL_CHARGED]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies.", 
        "R [[STUN]]'s [[KNOCKDOWN]] can interrupt Poppy's E [[DASH]] and R [[SKILL_CHARGED]]. [[EXIST]]", 
        "When hit by Poppy's E [[KNOCKBACK]] or [[STUN]] / R [[AIRBORNE]] or [[KNOCKBACK]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
