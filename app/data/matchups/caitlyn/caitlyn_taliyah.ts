// app/data/matchups/caitlyn/caitlyn_taliyah.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_taliyah: MatchupSummary = {
  champs: ["caitlyn", "taliyah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 탈리야 R의 [[SKILL_CHANNEL]]을 끊을 수 없음. \n 단, 탈리야 R2를 시전할 수 없음. \n 단, R의 [[TERRAIN]]이 계속해서 생성.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 탈리야 R2의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Taliyah's R [[SKILL_CHANNEL]]. \n However, she cannot cast R2. \n However, R's [[TERRAIN]] keeps being created.",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Taliyah's R2 [[SKILL_CHANNEL]] [[DASH]]."],
    },
    taliyah: {
      ko: [],
      en: [],
    },
  },
};
