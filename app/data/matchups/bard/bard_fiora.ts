// app/data/matchups/bard/bard_fiora.ts
import type { MatchupSummary } from "../_types";

export const bard_fiora: MatchupSummary = {
  champs: ["bard", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 피오라 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "바드 R(존야)로 피오라 Q의 [[DASH]]을 끊을 수 있음. 공격도 나가지 않음.", 
        "피오라 W(응수)로 바드 R(존야)을 무시하고 [[STUN]]을 걸 수 있음."],
      en: [""],
    },
    fiora: {
      ko: [],
      en: [],
    },
  },
};
