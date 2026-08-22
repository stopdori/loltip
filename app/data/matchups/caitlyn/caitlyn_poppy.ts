// app/data/matchups/caitlyn/caitlyn_poppy.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_poppy: MatchupSummary = {
  champs: ["caitlyn", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 뽀삐 R의 [[SKILL_CHARGED]]을 끊을 수 없음.",
        "W([[TRAP]])의 [[ROOT]]으로 뽀삐 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Poppy's R [[SKILL_CHARGED]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Poppy's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    poppy: {
      ko: [],
      en: [],
    },
  },
};
