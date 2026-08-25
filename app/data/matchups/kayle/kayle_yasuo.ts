// app/data/matchups/kayle/kayle_yasuo.ts
import type { MatchupSummary } from "../_types";

export const kayle_yasuo: MatchupSummary = {
  champs: ["kayle", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayle: {
      ko: ["야스오 W(장막)가 케일 Q를 막을 수 있음."],
      en: ["Yasuo’s W (Wind Wall) can block Kayle’s Q."],
    },
    yasuo: {
      ko: ["W의 [[WINDSHIELD]]으로 케일 평타(6레벨 이상), Q, E의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Kayle's basic attacks (level 6+), Q, and E [[PROJECTILE]]."],
    },
  },
};
