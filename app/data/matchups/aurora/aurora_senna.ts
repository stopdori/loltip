// app/data/matchups/aurora/aurora_senna.ts
import type { MatchupSummary } from "../_types";

export const aurora_senna: MatchupSummary = {
  champs: ["aurora", "senna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 세나 W의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 세나 W의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]이 걸리는 타이밍에 R을 사용해야 무시하고 [[DASH]]. \n 단, [[ROOT]]은 남아있음."],
      en: ["E (wind-up phase, dash phase) is affected by Senna's W [[ROOT]] differently depending on the phase. \n If [[ROOT]]ed during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed during the dash phase, she ignores it and continues the [[DASH]]. However, the [[ROOT]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Senna's W [[ROOT]] and continue [[DASH]]. \n However, R must be used at the moment the [[ROOT]] is applied to ignore it and continue the [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    senna: {
      ko: [],
      en: [],
    },
  },
};
