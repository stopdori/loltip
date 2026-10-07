// app/data/matchups/belveth/belveth_kayn.ts
import type { MatchupSummary } from "../_types";

export const belveth_kayn: MatchupSummary = {
  champs: ["belveth", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["W의 [[AIRBORNE]]으로 (케인 / 그암 / 다르킨) Q의 [[DASH]], E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 다르킨 W의 [[AIRBORNE]]으로 끊기지 않음. [[NOT_EXIST]] \n 단, [[AIRBORNE]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt (Kayn / Shadow Assassin / Darkin) Q [[DASH]] and E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R activates instantly and has [[TIMING_AFTERCAST]], so it is not interrupted by Darkin W [[AIRBORNE]]. [[NOT_EXIST]] \n However, the [[AIRBORNE]] still applies."],
    },
    kayn: {
      ko: [],
      en: [],
    },
  },
};
