// app/data/matchups/ashe/ashe_yasuo.ts
import type { MatchupSummary } from "../_types";

export const ashe_yasuo: MatchupSummary = {
  champs: ["ashe", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ashe: {
      ko: ["야스오 W(장막)가 애쉬 Q W E R 막을 수 있음."],
      en: ["Yasuo’s W (Wind Wall) can block Ashe’s Q W E R."],
    },
    yasuo: {
      ko: ["야스오 W([[WINDSHIELD]])로 애쉬 Q, W, R의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W ([[WINDSHIELD]]) can block Ashe's Q, W, and R [[PROJECTILE]]."],
    },
  },
};
