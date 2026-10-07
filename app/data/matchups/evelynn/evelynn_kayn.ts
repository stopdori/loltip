// app/data/matchups/evelynn/evelynn_kayn.ts
import type { MatchupSummary } from "../_types";

export const evelynn_kayn: MatchupSummary = {
  champs: ["evelynn", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 (케인 / 그암 / 다르킨) Q(돌진 단계)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[CHARM]]으로 (케인 / 그암 / 다르킨) E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q (dash phase) [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies.", 
        "W [[CHARM]] can interrupt (Kayn / Shadow Assassin / Darkin) E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
