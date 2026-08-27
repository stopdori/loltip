// app/data/matchups/chogath/chogath_skarner.ts
import type { MatchupSummary } from "../_types";

export const chogath_skarner: MatchupSummary = {
  champs: ["chogath", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 스카너 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 스카너 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Skarner's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Skarner's E (wall movement) [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
