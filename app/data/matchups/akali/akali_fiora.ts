// app/data/matchups/akali/akali_fiora.ts
import type { MatchupSummary } from "../_types";

export const akali_fiora: MatchupSummary = {
  champs: ["akali", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 피오라 Q의 [[DASH]]을 따라 갈 수 있음."],
      en: ["Akali's E2 [[HOMING]] [[DASH]] can follow Fiora's Q [[DASH]]."],
    },
    fiora: {
      ko: ["피오라 W를 아칼리 E에 사용하면 아칼리 E2 사용불가"],
      en: ["If Fiora uses W during Akali's E, Akali cannot use E2"],
    },
  },
};
