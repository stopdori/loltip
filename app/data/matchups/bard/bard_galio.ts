// app/data/matchups/bard/bard_galio.ts
import type { MatchupSummary } from "../_types";

export const bard_galio: MatchupSummary = {
  champs: ["bard", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]]로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "바드 Q의 [[STUN]]로 갈리오 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, W의 [[TAUNT]]은 해제될 때 발동.", 
        "바드 R(존야)로 갈리오 E의 [[DASH]], W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, W의 [[TAUNT]]은 해제될 때 발동."],
      en: [""],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
