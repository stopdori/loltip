// app/data/matchups/bard/bard_kindred.ts
import type { MatchupSummary } from "../_types";

export const bard_kindred: MatchupSummary = {
  champs: ["bard", "kindred"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 킨드레드 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 킨드레드 Q의 [[DASH]]을 끊을 수 있음.", 
        "바드 R(존야)로 킨드레드 R의 [[ZONE]] 위에 타이밍 맞게 사용하여 [[HEAL]]을 방해할 수 있음."],
      en: [""],
    },
    kindred: {
      ko: [],
      en: [],
    },
  },
};
