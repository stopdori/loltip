// app/data/matchups/caitlyn/caitlyn_yasuo.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_yasuo: MatchupSummary = {
  champs: ["caitlyn", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 야스오 E의 [[SKILL_CHANNEL]] [[DASH]] 을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Yasuo's E [[SKILL_CHANNEL]] [[DASH]]."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]] 효과로 케이틀린 평타, Q, E, R의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] effect can block Caitlyn's auto attack, Q, E, and R [[PROJECTILE]]s."],
    },
  },
};
