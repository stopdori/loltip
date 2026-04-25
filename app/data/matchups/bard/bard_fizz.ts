// app/data/matchups/bard/bard_fizz.ts
import type { MatchupSummary } from "../_types";

export const bard_fizz: MatchupSummary = {
  champs: ["bard", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 피즈 Q의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
