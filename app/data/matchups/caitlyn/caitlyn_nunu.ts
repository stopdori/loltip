// app/data/matchups/caitlyn/caitlyn_nunu.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_nunu: MatchupSummary = {
  champs: ["caitlyn", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 누누와 월럼프 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 누누와 월럼프 W의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음. \n 단, W의 [[PROJECTILE]]은 눈덩이를 굴린 시간에 비례하여 발사."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Nunu & Willump's R [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Nunu & Willump's W [[SKILL_CHANNEL]] [[DASH]]. \n However, the W's [[PROJECTILE]] is fired based on how long the snowball was rolled."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
