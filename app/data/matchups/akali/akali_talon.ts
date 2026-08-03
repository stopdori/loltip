// app/data/matchups/akali/akali_talon.ts
import type { MatchupSummary } from "../_types";

export const akali_talon: MatchupSummary = {
  champs: ["akali", "talon"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]] 탈론 Q, E의 [[DASH]]을 따라갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 탈론 R의 [[INVISIBILITY]]를 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Talon's Q and E [[DASH]].", "E1 [[TRUE_SIGHT]] can reveal Talon's R [[INVISIBILITY]]. \n However, if Akali's E2 collides with him, the invisibility is no longer revealed."],
    },
    talon: {
      ko: [],
      en: [],
    },
  },
};
