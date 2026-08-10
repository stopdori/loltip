// app/data/matchups/aurora/aurora_zac.ts
import type { MatchupSummary } from "../_types";

export const aurora_zac: MatchupSummary = {
  champs: ["aurora", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 자크 Q, E, R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, Q, E, R의 [[AIRBORNE]]으로 끌려가거나 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 자크 Q, E, R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Zac's Q, E, and R [[AIRBORNE]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled or knocked back by Q, E, or R's [[AIRBORNE]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Zac's Q, E, and R [[AIRBORNE]] and continue [[DASH]]."],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
