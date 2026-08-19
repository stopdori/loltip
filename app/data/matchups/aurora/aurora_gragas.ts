// app/data/matchups/aurora/aurora_gragas.ts
import type { MatchupSummary } from "../_types";

export const aurora_gragas: MatchupSummary = {
  champs: ["aurora", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, E, R의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 그라가스 E, R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Gragas's E and R [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[DASH]] activates while being knocked back by E and R's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Gragas's E and R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    gragas: {
      ko: [],
      en: [],
    },
  },
};
