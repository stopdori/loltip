// app/data/matchups/chogath/chogath_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const chogath_xinzhao: MatchupSummary = {
  champs: ["chogath", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 신 짜오 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 신 짜오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Xin Zhao's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Xin Zhao's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    xinzhao: {
      ko: [],
      en: [],
    },
  },
};
