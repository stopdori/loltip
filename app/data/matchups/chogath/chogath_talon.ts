// app/data/matchups/chogath/chogath_talon.ts
import type { MatchupSummary } from "../_types";

export const chogath_talon: MatchupSummary = {
  champs: ["chogath", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 탈론 Q의 [[DASH]], E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 탈론 Q의 [[DASH]], E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Talon's Q [[DASH]] and E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Talon's Q [[DASH]] and E (wall movement) [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
