// app/data/matchups/akali/akali_vayne.ts
import type { MatchupSummary } from "../_types";

export const akali_vayne: MatchupSummary = {
  champs: ["akali", "vayne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]] 베인 Q(구르기)의 [[DASH]]을 따라갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 베인 RQ의 [[INVISIBILITY]]를 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Vayne's Q (Tumble) [[DASH]].", "E1 [[TRUE_SIGHT]] can reveal Vayne's RQ [[INVISIBILITY]]. \n However, if Akali's E2 collides with her, the invisibility is no longer revealed."],
    },
    vayne: {
      ko: [],
      en: [],
    },
  },
};
