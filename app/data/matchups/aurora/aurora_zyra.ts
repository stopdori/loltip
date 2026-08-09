// app/data/matchups/aurora/aurora_zyra.ts
import type { MatchupSummary } from "../_types";

export const aurora_zyra: MatchupSummary = {
  champs: ["aurora", "zyra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aurora: {
      ko: ["E(준비단계, 돌진단계)는 자이라 E의 [[ROOT]]을 단계에 따라 다르게 판정. \n 준비단계에 [[ROOT]]이 걸리면 [[DASH]]이 발동하지 않고, \n 돌진단계에 [[ROOT]]이 걸리면 무시하고 [[DASH]]. 단, [[ROOT]]은 남아있음.", 
        "E(준비단계)의 [[CC_BUFFER]]로 자이라 R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음.",
        "R의 [[UNSTOPPABLE]] [[DASH]]으로 자이라 E의 [[ROOT]], R의 [[AIRBORNE]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: [""],
    },
    zyra: {
      ko: [],
      en: [],
    },
  },
};
