// app/data/matchups/caitlyn/caitlyn_mel.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_mel: MatchupSummary = {
  champs: ["caitlyn", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 케이틀린 평타(일반, 헤드샷), Q, E(투망), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 케이틀린 W([[TRAP]])을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Caitlyn's basic attacks (normal, Headshot), Q, E (net), and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Caitlyn's W ([[TRAP]]). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
