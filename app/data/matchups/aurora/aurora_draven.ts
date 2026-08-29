// app/data/matchups/aurora/aurora_draven.ts
import type { MatchupSummary } from "../_types";

export const aurora_draven: MatchupSummary = {
  champs: ["aurora", "draven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 드레이븐 E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, E의 [[AIRBORNE]]으로 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 드레이븐 E의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Draven's E [[AIRBORNE]] and continue [[DASH]]. \n However, the [[DASH]] activates while being knocked back by E's [[AIRBORNE]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Draven's E [[AIRBORNE]] and continue [[DASH]]."],
    },
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[KNOCKBACK]] can interrupt Aurora's W and E [[DASH]]."],
    },
  },
};
