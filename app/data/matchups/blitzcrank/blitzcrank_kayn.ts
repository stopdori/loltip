// app/data/matchups/blitzcrank/blitzcrank_kayn.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_kayn: MatchupSummary = {
  champs: ["blitzcrank", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["Q의 [[GRAB]], E의 [[AIRBORNE]]으로 케인 Q(돌진 단계)의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[SILENCE]]으로 케인 Q(돌진 단계)의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]] \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[GRAB]] and E [[AIRBORNE]] can interrupt Kayn's Q (dash phase) [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[SILENCE]] cannot interrupt Kayn's Q (dash phase) [[DASH]] or E [[IGNORE_TERRAIN]]. [[NOT_EXIST]] \n However, the [[SILENCE]] still applies."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
