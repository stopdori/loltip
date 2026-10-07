// app/data/matchups/kayn/kayn_poppy.ts
import type { MatchupSummary } from "../_types";

export const kayn_poppy: MatchupSummary = {
  champs: ["kayn", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    kayn: {
      ko: ["다르킨 W의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]]을 끊을 수 있음.", 
        "케인 R의 [[UNTARGETABLE]]로 뽀삐 R(홈런)을 피할 수 있음.", 
        "Q, R은 [[DASH]], E는 [[MOBILITY]] 판정으로 뽀삐 W의 [[GROUNDED]] 효과를 받을 때 사용할 수 없음."],
      en: [""],
    },
    poppy: {
      ko: ["W의 [[ANTI_DASH]]으로 케인 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "W의 [[ANTI_DASH]]으로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]]"],
      en: ["W [[ANTI_DASH]] can interrupt Kayn's Q [[DASH]]. [[EXIST]]", 
        "W [[ANTI_DASH]] cannot interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[NOT_EXIST]]"],
    },
  },
};
