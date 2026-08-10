// app/data/matchups/aurora/aurora_trundle.ts
import type { MatchupSummary } from "../_types";

export const aurora_trundle: MatchupSummary = {
  champs: ["aurora", "trundle"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 트런들 E([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, E의 [[AIRBORNE]]으로 끌려가거나 밀려나다가 [[DASH]] 발동. \n 단, 너무 늦게 발동되면 벽에 끼일 수 있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 트런들 E([[TERRAIN]])를 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Trundle's E ([[TERRAIN]]) [[AIRBORNE]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled or knocked back by E's [[AIRBORNE]]. \n However, if activated too late, she can get stuck inside the wall.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Trundle's E ([[TERRAIN]]) and continue [[DASH]]."],
    },
    trundle: {
      ko: [],
      en: [],
    },
  },
};
