// app/data/matchups/akali/akali_maokai.ts
import type { MatchupSummary } from "../_types";

export const akali_maokai: MatchupSummary = {
  champs: ["akali", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 마오카이 W의 [[DASH]]을 따라갈 수 있음. \n 단, 아칼리 E2를 마오카이 W의 [[UNTARGETABLE]] 상태일 때 사용할 수 없음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Maokai's W [[DASH]]. \n However, Akali's E2 cannot be used while Maokai's W [[UNTARGETABLE]] is active."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
