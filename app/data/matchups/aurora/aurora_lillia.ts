// app/data/matchups/aurora/aurora_lillia.ts
import type { MatchupSummary } from "../_types";

export const aurora_lillia: MatchupSummary = {
  champs: ["aurora", "lillia"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]]로 릴리아 R의 [[SLEEP]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[SLEEP]]은 남아있음.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 릴리아 R의 [[SLEEP]]이 발동하고 걸리는 순간 사용하면 무시하고 [[DASH]]할 수 있음. \n 이때 [[SLEEP]]이 남아있지 않고 사라짐."],
      en: ["Aurora's E (ready state) [[CC_BUFFER]] can ignore Lillia's R [[SLEEP]] and continue [[DASH]]. \n However, the [[SLEEP]] still applies.",
        "If Aurora uses R's [[UNSTOPPABLE]] [[DASH]] the moment Lillia's R [[SLEEP]] triggers and lands, it can ignore the [[SLEEP]] and continue [[DASH]]. \n In this case, the [[SLEEP]] does not remain and is removed."],
    },
    lillia: {
      ko: [],
      en: [],
    },
  },
};
