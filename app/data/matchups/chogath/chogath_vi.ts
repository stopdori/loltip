// app/data/matchups/chogath/chogath_vi.ts
import type { MatchupSummary } from "../_types";

export const chogath_vi: MatchupSummary = {
  champs: ["chogath", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 바이 Q의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Vi's Q [[SKILL_CHARGED]].",
        "Q [[AIRBORNE]] can interrupt Vi's Q [[DASH]].",
        "W [[SILENCE]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
