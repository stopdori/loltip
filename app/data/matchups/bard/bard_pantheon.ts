// app/data/matchups/bard/bard_pantheon.ts
import type { MatchupSummary } from "../_types";

export const bard_pantheon: MatchupSummary = {
  champs: ["bard", "pantheon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 판테온 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 판테온 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 판테온 W의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 판테온 E스킬을 멈출 수 없음."],
      en: [""],
    },
    pantheon: {
      ko: [],
      en: [],
    },
  },
};
