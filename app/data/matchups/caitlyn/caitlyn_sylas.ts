// app/data/matchups/caitlyn/caitlyn_sylas.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_sylas: MatchupSummary = {
  champs: ["caitlyn", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 사일러스 R(강탈한 케이틀린 R)의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Sylas's R (stolen Caitlyn R)'s [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Sylas's W, E1, and E2 [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    sylas: {
      ko: [],
      en: [],
    },
  },
};
