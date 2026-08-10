// app/data/matchups/aurora/aurora_kled.ts
import type { MatchupSummary } from "../_types";

export const aurora_kled: MatchupSummary = {
  champs: ["aurora", "kled"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 클레드 승마폼 Q의 [[GRAB]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음. \n 단, Q의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동. \n 단, R의 [[KNOCKBACK]]으로 밀려나다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 클레드 승마폼 Q의 [[GRAB]], R의 [[KNOCKBACK]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Kled's mounted form Q [[GRAB]] and R [[KNOCKBACK]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled by Q's [[GRAB]]. \n However, the [[DASH]] activates while being knocked back by R's [[KNOCKBACK]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Kled's mounted form Q [[GRAB]] and R [[KNOCKBACK]] and continue [[DASH]]."],
    },
    kled: {
      ko: [],
      en: [],
    },
  },
};
