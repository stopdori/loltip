// app/data/matchups/fizz/fizz_poppy.ts
import type { MatchupSummary } from "../_types";

export const fizz_poppy: MatchupSummary = {
  champs: ["fizz", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fizz: {
      ko: ["피즈 E의 [[UNTARGETABLE]]로 뽀삐 Q, E. R을 피할 수 있음.", "피즈 R의 [[AIRBORNE]]으로 뽀삐 E의 [[DASH]], R의 [[SKILL_CHARGED]]을 끊을 수 있음."],
      en: [""],
    },
    poppy: {
      ko: ["뽀삐 W의 [[GROUNDED]]로 피즈 Q의 [[DASH]]를 막을 수 있음.", "뽀삐 W의 [[GROUNDED]]로 피즈 E의 [[DASH]]를 막을 수 없음.\n[[UNTARGETABLE]] 때문으로 추정.", "뽀삐 W의 [[GROUNDED]] 디버프를 피즈가 걸리면 Q, E 스킬을 사용 할 수 없음."],
      en: [],
    },
  },
};
