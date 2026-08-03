// app/data/matchups/akali/akali_yuumi.ts
import type { MatchupSummary } from "../_types";

export const akali_yuumi: MatchupSummary = {
  champs: ["akali", "yuumi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]] 유미 W를 따라갈 수 있음. \n 단, 유미가 아군에게 탑승해서 W의 [[UNTARGETABLE]] 상태일 때 아칼리 E2를 사용할 수 없음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Yuumi's W. \n However, when Yuumi is attached to an ally and is [[UNTARGETABLE]] via W, Akali cannot use E2."],
    },
    yuumi: {
      ko: [],
      en: [],
    },
  },
};
