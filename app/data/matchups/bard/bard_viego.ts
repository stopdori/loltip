// app/data/matchups/bard/bard_viego.ts
import type { MatchupSummary } from "../_types";

export const bard_viego: MatchupSummary = {
  champs: ["bard", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "바드 R(존야)로 비에고 W의 [[SKILL_CHARGED]], [[DASH]]을 끊을 수 있음."],
      en: [""],
    },
    viego: {
      ko: ["비에고 R의 [[UNSTOPPABLE]] [[BLINK]]으로 바드 R(존야)을 무시할 수 있음."],
      en: [],
    },
  },
};
