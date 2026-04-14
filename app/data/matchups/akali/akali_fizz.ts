// app/data/matchups/akali/akali_fizz.ts
import type { MatchupSummary } from "../_types";

export const akali_fizz: MatchupSummary = {
  champs: ["akali", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 피즈 Q, E의 [[DASH]]을 따라 갈 수 있음. \n 단, 아칼리 E2를 피즈 E의 [[UNTARGETABLE]] 상태일 때 사용할 수 없음."],
      en: ["Akali's E2 [[HOMING]] [[DASH]] can follow Fizz's Q and E [[DASH]]. \n However, Akali's E2 cannot be used while Fizz's E is in [[UNTARGETABLE]] state."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
