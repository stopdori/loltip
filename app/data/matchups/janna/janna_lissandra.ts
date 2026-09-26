// app/data/matchups/janna/janna_lissandra.ts
import type { MatchupSummary } from "../_types";

export const janna_lissandra: MatchupSummary = {
  champs: ["janna", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    janna: {
      ko: [""],
      en: [""],
    },
    lissandra: {
      ko: ["W의 [[ROOT]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음.", 
        "R의 [[STUN]]로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]", 
      "잔나 Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: [],
    },
  },
};
