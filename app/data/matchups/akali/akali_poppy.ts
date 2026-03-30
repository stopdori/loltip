// app/data/matchups/akali/akali_poppy.ts
import type { MatchupSummary } from "../_types";

export const akali_poppy: MatchupSummary = {
  champs: ["akali", "poppy"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 뽀삐 E를 따라갈 수 있음"],
      en: ["Akali's E2 can follow 뽀삐 E"],
    },
    poppy: {
      ko: ["뽀삐 W의 [[ANTI_DASH]]로 아칼리 E1, E2, R1, R2의 [[DASH]]을 막고 [[GROUNDED]] 디버프를 걸 수 있음.\n 단, [[GROUNDED]]에 걸렸을 때, 아칼리의 E1, E2, R1, R2를 사용 할 수 없음."],
      en: [],
    },
  },
};
