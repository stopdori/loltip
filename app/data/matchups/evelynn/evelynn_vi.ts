// app/data/matchups/evelynn/evelynn_vi.ts
import type { MatchupSummary } from "../_types";

export const evelynn_vi: MatchupSummary = {
  champs: ["evelynn", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]]",
        "W의 [[CHARM]]으로 바이 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Vi's Q [[SKILL_CHARGED]]. [[EXIST]]",
        "W [[CHARM]] cannot interrupt Vi's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
