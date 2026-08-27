// app/data/matchups/belveth/belveth_quinn.ts
import type { MatchupSummary } from "../_types";

export const belveth_quinn: MatchupSummary = {
  champs: ["belveth", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 퀸 E의 [[DASH]], R의 [[SKILL_CHANNEL]], R의 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 퀸 E의 [[KNOCKBACK]]으로 끊기지 않음. \n 단, [[KNOCKBACK]]은 남아있음."],
      en: ["W [[AIRBORNE]] can interrupt Quinn's E [[DASH]], R [[SKILL_CHANNEL]], and R [[TRANSFORM]].",
        "R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Quinn's E [[KNOCKBACK]]. \n However, the [[KNOCKBACK]] still applies."],
    },
    quinn: {
      ko: [],
      en: [],
    },
  },
};
