// app/data/matchups/drmundo/drmundo_yasuo.ts
import type { MatchupSummary } from "../_types";

export const drmundo_yasuo: MatchupSummary = {
  champs: ["drmundo", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 야스오 Q3의 [[AIRBORNE]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Yasuo's Q3 [[AIRBORNE]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
    yasuo: {
      ko: ["야스오 W의 [[WINDSHIELD]]으로 문도 박사 Q의 [[PROJECTILE]]를 막을 수 있음."],
      en: ["W [[WINDSHIELD]] can block Dr. Mundo's Q [[PROJECTILE]]."],
    },
  },
};
