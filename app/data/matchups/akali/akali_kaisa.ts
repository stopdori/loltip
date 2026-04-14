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
      ko: ["아칼리 E2의 [[HOMING]] [[DASH]]으로 카이사 R의 [[DASH]]을 따라 갈 수 있음.", 
        "아칼리 E1의 [[TRUE_SIGHT]]로 카이사 [[EVOLVED]] E의 [[INVISIBILITY]]를 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["Akali's E2 [[HOMING]] [[DASH]] can follow Kai'Sa's R [[DASH]].", "Akali's E1 [[TRUE_SIGHT]] can reveal Kai'Sa's [[EVOLVED]] E [[INVISIBILITY]]. \n However, if E2 hits her, she becomes invisible again."],
    },
    kaisa: {
      ko: ["카이사 W로 아칼리 W의 [[INVISIBILITY]]를 볼 수 있음"],
      en: ["Kai'Sa's W reveals Akali's W [[INVISIBILITY]]"],
    },
  },
};
