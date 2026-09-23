// app/data/matchups/bard/bard_chogath.ts
import type { MatchupSummary } from "../_types";

export const bard_chogath: MatchupSummary = {
  champs: ["bard", "chogath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Bard's E (wall-travel) [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Bard's E (wall-travel) [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
