// app/data/matchups/belveth/belveth_skarner.ts
import type { MatchupSummary } from "../_types";

export const belveth_skarner: MatchupSummary = {
  champs: ["belveth", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["W의 [[AIRBORNE]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 스카너 E의 [[SUPPRESS]], [[STUN]] / R의 [[SUPPRESS]]으로 끊기지 않음. [[NOT_EXIST]] \n 단, [[SUPPRESS]], [[STUN]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R activates instantly and has [[TIMING_AFTERCAST]], so it is not interrupted by Skarner's E [[SUPPRESS]], [[STUN]] / R [[SUPPRESS]]. [[NOT_EXIST]] \n However, the [[SUPPRESS]] and [[STUN]] still apply."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
