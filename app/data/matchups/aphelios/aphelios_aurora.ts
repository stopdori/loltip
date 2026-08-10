// app/data/matchups/aphelios/aphelios_aurora.ts
import type { MatchupSummary } from "../_types";

export const aphelios_aurora: MatchupSummary = {
  champs: ["aphelios", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aphelios: {
      ko: ["아펠리오스 중력포(보라) Q의 [[ROOT]]으로 오로라 W의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]은 남아있음."],
      en: ["Aphelios's Gravitum (purple) Q [[ROOT]] cannot interrupt Aurora's W [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 아펠리오스 중력포(보라) Q의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 아펠리오스 중력포(보라) Q의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: ["E (wind-up phase, dash phase) is affected by Aphelios's Gravitum (purple) Q [[ROOT]] differently depending on the phase. \n If [[ROOT]]ed during the wind-up phase, the [[DASH]] does not activate. \n If [[ROOT]]ed during the dash phase, she ignores it and continues the [[DASH]]. However, the [[ROOT]] still applies.",
        "R [[UNSTOPPABLE]] [[DASH]] can ignore Aphelios's Gravitum (purple) Q [[ROOT]] and continue [[DASH]]. \n However, the [[ROOT]] still applies."],
    },
  },
};
