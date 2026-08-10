// app/data/matchups/aurora/aurora_sett.ts
import type { MatchupSummary } from "../_types";

export const aurora_sett: MatchupSummary = {
  champs: ["aurora", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 세트 E의 [[GRAB]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, E의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동. \n 단, [[STUN]]은 남아있음. ",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 세트 E의 [[GRAB]], [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 세트 R의 [[SUPPRESS]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Sett's E [[GRAB]] and [[STUN]] and continue [[DASH]]. \n However, the [[DASH]] activates while being pulled by E's [[GRAB]]. \n However, the [[STUN]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Sett's E [[GRAB]] and [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Sett's R [[SUPPRESS]] and continue [[DASH]]."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
