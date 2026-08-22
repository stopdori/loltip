// app/data/matchups/caitlyn/caitlyn_vi.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_vi: MatchupSummary = {
  champs: ["caitlyn", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Vi's Q [[SKILL_CHARGED]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
