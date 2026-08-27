// app/data/matchups/chogath/chogath_taliyah.ts
import type { MatchupSummary } from "../_types";

export const chogath_taliyah: MatchupSummary = {
  champs: ["chogath", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 탈리야 R2의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "W의 [[SILENCE]]으로 탈리야 R2의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt Taliyah's R2 [[SKILL_CHANNEL]] [[DASH]].",
        "W [[SILENCE]] cannot interrupt Taliyah's R2 [[SKILL_CHANNEL]] [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
