// app/data/matchups/aurora/aurora_zoe.ts
import type { MatchupSummary } from "../_types";

export const aurora_zoe: MatchupSummary = {
  champs: ["aurora", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 조이 E의 [[SLEEP]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SLEEP]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 조이 E의 [[SLEEP]]이 걸리는 순간 사용하면 무시하고 [[DASH]]할 수 있음. \n 이때 [[SLEEP]]이 남아있지 않고 사라짐."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Zoe's E [[SLEEP]] and continue [[DASH]]. \n However, the [[SLEEP]] still applies.",
        "Using R's [[UNSTOPPABLE]] [[DASH]] at the exact moment Zoe's E [[SLEEP]] lands can ignore it and continue the [[DASH]]. \n In this case, the [[SLEEP]] does not remain and is removed."],
    },
    zoe: {
      ko: [],
      en: [],
    },
  },
};
