// app/data/matchups/aurora/aurora_mel.ts
import type { MatchupSummary } from "../_types";

export const aurora_mel: MatchupSummary = {
  champs: ["aurora", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["오로라 E(준비단계, 돌진단계)는 멜 E의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "오로라 R의 [[UNSTOPPABLE]] [[DASH]]으로 멜 E의 [[ROOT]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음.",],
      en: [],
    },
    mel: {
      ko: ["멜 W([[REFLECT]])로 오로라 Q의 [[PROJECTILE]]를 반사할 수 있음."],
      en: [],
    },
  },
};
