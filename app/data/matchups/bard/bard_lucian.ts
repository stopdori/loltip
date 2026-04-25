// app/data/matchups/bard/bard_lucian.ts
import type { MatchupSummary } from "../_types";

export const bard_lucian: MatchupSummary = {
  champs: ["bard", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 루시안 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: [""],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
