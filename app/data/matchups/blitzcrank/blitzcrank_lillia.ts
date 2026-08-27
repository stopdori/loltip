// app/data/matchups/blitzcrank/blitzcrank_lillia.ts
import type { MatchupSummary } from "../_types";

export const blitzcrank_lillia: MatchupSummary = {
  champs: ["blitzcrank", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    blitzcrank: {
      ko: ["블리츠크랭크 Q의 [[GRAB]], E의 [[AIRBORNE]]으로 릴리아 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음.", 
        "블리츠크랭크 R의 [[SILENCE]]으로 릴리아 W의 [[DASH]]을 끊을 수 없음. \n 단, W의 공격도 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[GRAB]] and E [[AIRBORNE]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted.",
        "R [[SILENCE]] cannot interrupt Lillia's W [[DASH]]. \n However, W's damage instance cannot be interrupted either. \n However, the [[SILENCE]] still applies."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
