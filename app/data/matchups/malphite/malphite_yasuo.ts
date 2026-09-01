// app/data/matchups/malphite/malphite_yasuo.ts
import type { MatchupSummary } from "../_types";

export const malphite_yasuo: MatchupSummary = {
  champs: ["malphite", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 야스오 Q3의 [[AIRBORNE]]을 무시할 수 있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Yasuo's Q3 [[AIRBORNE]]."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 말파이트 Q의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["Yasuo's W [[WINDSHIELD]] can block Malphite's Q [[PROJECTILE]]."],
    },
  },
};
