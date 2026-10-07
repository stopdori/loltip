// app/data/matchups/chogath/chogath_kayn.ts
import type { MatchupSummary } from "../_types";

export const chogath_kayn: MatchupSummary = {
  champs: ["chogath", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "W의 [[SILENCE]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]] \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "W [[SILENCE]] cannot interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]] or E [[IGNORE_TERRAIN]]. [[NOT_EXIST]] \n However, the [[SILENCE]] still applies."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
