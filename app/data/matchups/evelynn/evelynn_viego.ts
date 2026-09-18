// app/data/matchups/evelynn/evelynn_viego.ts
import type { MatchupSummary } from "../_types";

export const evelynn_viego: MatchupSummary = {
  champs: ["evelynn", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음. [[EXIST]] \n 단, 비에고ㅓ W는 중단될 때 시전.",
        "W의 [[CHARM]]으로 비에고 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Viego's W [[SKILL_CHARGED]]. [[EXIST]] \n However, Viego's W still fires when interrupted.",
        "W [[CHARM]] cannot interrupt Viego's W [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
