// app/data/matchups/belveth/belveth_rakan.ts
import type { MatchupSummary } from "../_types";

export const belveth_rakan: MatchupSummary = {
  champs: ["belveth", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 라칸 W, E의 [[DASH]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]으로 끊기지 않음. \n 단, [[AIRBORNE]], [[STUN]]은 남아있음."],
      en: [""],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음. [[EXIST]]", 
        "R의 [[CHARM]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음.", 
        "W의 [[AIRBORNE]], R의 [[CHARM]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
