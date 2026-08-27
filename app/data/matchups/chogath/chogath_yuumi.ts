// app/data/matchups/chogath/chogath_yuumi.ts
import type { MatchupSummary } from "../_types";

export const chogath_yuumi: MatchupSummary = {
  champs: ["chogath", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 유미(탈착) R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]]으로 유미 W의 [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 유미 W의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Yuumi's (detached) R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] can interrupt Yuumi's W [[DASH]].",
        "W [[SILENCE]] cannot interrupt Yuumi's W [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
