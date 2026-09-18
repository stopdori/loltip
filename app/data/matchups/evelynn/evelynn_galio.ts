// app/data/matchups/evelynn/evelynn_galio.ts
import type { MatchupSummary } from "../_types";

export const evelynn_galio: MatchupSummary = {
  champs: ["evelynn", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 갈리오 W의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]] \n 단, 갈리오 W는 중단될 때 시전.",
        "W의 [[CHARM]]으로 갈리오 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음."],
      en: ["W [[CHARM]] can interrupt Galio's W [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]]. [[EXIST]] \n However, Galio's W still fires when interrupted.",
        "W [[CHARM]] cannot interrupt Galio's E [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
