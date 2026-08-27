// app/data/matchups/chogath/chogath_gnar.ts
import type { MatchupSummary } from "../_types";

export const chogath_gnar: MatchupSummary = {
  champs: ["chogath", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Gnar's Mini Form / Mega Form E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Gnar's Mini Form / Mega Form E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    gnar: {
      ko: [],
      en: [],
    },
  },
};
