// app/data/matchups/belveth/belveth_lillia.ts
import type { MatchupSummary } from "../_types";

export const belveth_lillia: MatchupSummary = {
  champs: ["belveth", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 릴리아 W의 [[DASH]]을 끊을 수 있음. \n 단, W의 공격도 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 릴리아 R의 [[SLEEP]]으로 끊기지 않음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Lillia's W [[DASH]]. \n However, W's damage instance can also be interrupted.",
        "R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Lillia's R [[SLEEP]]. \n However, the [[SLEEP]] still applies."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
