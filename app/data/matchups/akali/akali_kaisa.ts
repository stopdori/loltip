// app/data/matchups/akali/akali_kaisa.ts
import type { MatchupSummary } from "../_types";

export const akali_kaisa: MatchupSummary = {
  champs: ["akali", "kaisa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 카이사 R을 따라 갈 수 있음", "아칼리 E로 카이사 E(진화)의 [[INVISIBILITY]]를 볼 수 있음. 단, E2를 사용하면 더이상 모습이 보이지 않음"],
      en: ["Akali's E2 can follow Kai'Sa's R", "Akali's E reveals Kai'Sa's E(진화) [[INVISIBILITY]]. 단, E2를 사용하면 더이상 모습이 보이지 않음"],
    },
    kaisa: {
      ko: ["카이사 W로 아칼리 W의 [[INVISIBILITY]]를 볼 수 있음"],
      en: ["Kai'Sa's W reveals Akali's W [[INVISIBILITY]]"],
    },
  },
};
