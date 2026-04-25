// app/data/matchups/bard/bard_wukong.ts
import type { MatchupSummary } from "../_types";

export const bard_wukong: MatchupSummary = {
  champs: ["bard", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 오공 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 R(존야)로 오공 E의 [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    wukong: {
      ko: ["오공 W의 [[CLONE]]은 바드 R(존야)로 존야 상태로 만들 수 없음."],
      en: [],
    },
  },
};
