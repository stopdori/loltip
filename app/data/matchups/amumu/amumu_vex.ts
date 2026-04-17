// app/data/matchups/amumu/amumu_vex.ts
import type { MatchupSummary } from "../_types";

export const amumu_vex: MatchupSummary = {
  champs: ["amumu", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    amumu: {
      ko: ["아무무 Q의 [[HOMING]] [[DASH]]으로 벡스 R2의 [[DASH]]을 따라갈 수 있음.", 
        "아무무 Q의 [[CC_BUFFER]]로 벡스 P의 [[FEAR]]를 무시하고 [[DASH]]할 수 있음. \n 단, [[FEAR]]는 남아있음."],
      en: ["Amumu's Q [[HOMING]] [[DASH]] can follow Vex's R2 [[DASH]].", "Amumu's Q [[CC_BUFFER]] can ignore Vex's P [[FEAR]] and continue [[DASH]]. \n However, the [[FEAR]] still applies."],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
