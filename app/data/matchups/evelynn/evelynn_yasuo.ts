// app/data/matchups/evelynn/evelynn_yasuo.ts
import type { MatchupSummary } from "../_types";

export const evelynn_yasuo: MatchupSummary = {
  champs: ["evelynn", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 야스오 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] can interrupt Yasuo's E [[DASH]]. [[EXIST]]"],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 이블린 Q1, Q2~Q4의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Evelynn's Q1 and Q2-Q4 [[PROJECTILE]]."],
    },
  },
};
