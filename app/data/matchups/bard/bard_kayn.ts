// app/data/matchups/bard/bard_kayn.ts
import type { MatchupSummary } from "../_types";

export const bard_kayn: MatchupSummary = {
  champs: ["bard", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 케인 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 케인 E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "바드 R(존야)로 케인 Q의 [[DASH]], E(벽이동)의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: [""],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
