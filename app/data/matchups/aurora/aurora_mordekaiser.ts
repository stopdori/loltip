// app/data/matchups/aurora/aurora_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const aurora_mordekaiser: MatchupSummary = {
  champs: ["aurora", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 모데카이저 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음. \n 단, E의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 모데카이저 E의 [[GRAB]]을 무시하고 [[DASH]]할 수 있음.",
        "R의 [[UNSTOPPABLE]]로 모데카이저 R을 무시할 수 있음. \n 모데가 둔기를 전방으로 내밀 때 오로라 R을 사용하면 무시할 수 있음. \n 즉, 이세계로 가지 않음. 모데 R의 쿨타임도 소모."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Mordekaiser's E [[GRAB]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled by E's [[GRAB]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Mordekaiser's E [[GRAB]] and continue [[DASH]].",
        "R's [[UNSTOPPABLE]] can ignore Mordekaiser's R. \n If Aurora uses R while Mordekaiser is thrusting his mace forward, it can be ignored. \n In other words, Aurora is not pulled into the Realm of Death, but Mordekaiser's R cooldown is still consumed."],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
};
