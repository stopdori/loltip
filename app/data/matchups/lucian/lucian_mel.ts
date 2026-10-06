// app/data/matchups/lucian/lucian_mel.ts
import type { MatchupSummary } from "../_types";

export const lucian_mel: MatchupSummary = {
  champs: ["lucian", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lucian: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 루시안 평타(일반, P의 추가 발사), W, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 루시안 Q를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 루시안 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Lucian's basic attacks (normal, P extra shot), W, and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Lucian's Q. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Lucian's E [[DASH]] and R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
