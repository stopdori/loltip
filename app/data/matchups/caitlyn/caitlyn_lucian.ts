// app/data/matchups/caitlyn/caitlyn_lucian.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_lucian: MatchupSummary = {
  champs: ["caitlyn", "lucian"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 루시안 R의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "W([[TRAP]])의 [[ROOT]]으로 루시안 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Lucian's R [[SKILL_CHANNEL]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Lucian's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    lucian: {
      ko: [],
      en: [],
    },
  },
};
