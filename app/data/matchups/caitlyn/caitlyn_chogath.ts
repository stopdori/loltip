// app/data/matchups/caitlyn/caitlyn_chogath.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_chogath: MatchupSummary = {
  champs: ["caitlyn", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Caitlyn's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Caitlyn's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Caitlyn's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
