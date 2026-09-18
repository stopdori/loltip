// app/data/matchups/evelynn/evelynn_quinn.ts
import type { MatchupSummary } from "../_types";

export const evelynn_quinn: MatchupSummary = {
  champs: ["evelynn", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 퀸 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.",
        "퀸 R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음."],
      en: ["W [[CHARM]] cannot interrupt Quinn's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies.",
        "W [[CHARM]] can interrupt Quinn's R [[SKILL_CHANNEL]] and cancel her R [[TRANSFORM]]."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
