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
      en: [],
    },
    aurora: {
      ko: ["오로라 E(준비단계, 돌진단계)는 아펠리오스 중력포(보라) Q의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 아펠리오스 중력포(보라) Q의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
