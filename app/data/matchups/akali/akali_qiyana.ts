// app/data/matchups/akali/akali_qiyana.ts
import type { MatchupSummary } from "../_types";

export const akali_qiyana: MatchupSummary = {
  champs: ["akali", "qiyana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 키아나 W, E의 [[DASH]]을 따라갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 키아나 숲Q의 [[INVISIBILITY]]를 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Qiyana's W and E [[DASH]].",
        "E1 [[TRUE_SIGHT]] can reveal Qiyana's Forest Q [[INVISIBILITY]]. \n However, if Akali's E2 collides with her, the invisibility is no longer revealed."],
    },
    qiyana: {
      ko: [],
      en: [],
    },
  },
};
