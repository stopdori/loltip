// app/data/matchups/caitlyn/caitlyn_urgot.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_urgot: MatchupSummary = {
  champs: ["caitlyn", "urgot"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 우르곳 W의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
        "활성화된 W([[TRAP]])의 [[ROOT]]으로 우르곳 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Urgot's W [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Urgot's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    urgot: {
      ko: [],
      en: [],
    },
  },
};
