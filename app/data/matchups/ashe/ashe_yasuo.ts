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
      ko: ["R의 [[STUN]]로 야스오 E의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[STUN]] can interrupt Yasuo's E [[DASH]]."],
    },
    yasuo: {
      ko: ["야스오 W([[WINDSHIELD]])로 애쉬 평타, Q, W, R의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W ([[WINDSHIELD]]) can block Ashe's basic attacks, Q, W, and R [[PROJECTILE]]."],
    },
  },
};
