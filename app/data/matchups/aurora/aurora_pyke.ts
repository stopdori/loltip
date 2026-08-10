// app/data/matchups/aurora/aurora_pyke.ts
import type { MatchupSummary } from "../_types";

export const aurora_pyke: MatchupSummary = {
  champs: ["aurora", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계)의 [[CC_BUFFER]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[STUN]]은 남아있음. \n 단, Q의 [[GRAB]]으로 끌려가다가 [[DASH]] 발동.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시하고 [[DASH]]할 수 있음."],
      en: ["E (wind-up phase) [[CC_BUFFER]] can ignore Pyke's Q [[GRAB]] and E [[STUN]] and continue [[DASH]]. \n However, the [[STUN]] still applies. \n However, the [[DASH]] activates while being pulled by Q's [[GRAB]].",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Pyke's Q [[GRAB]] and E [[STUN]] and continue [[DASH]]."],
    },
    pyke: {
      ko: [],
      en: [],
    },
  },
};
