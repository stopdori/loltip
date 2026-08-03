// app/data/matchups/akali/akali_aurora.ts
import type { MatchupSummary } from "../_types";

export const akali_aurora: MatchupSummary = {
  champs: ["akali", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 오로라 W, E의 [[DASH]], R의 [[DASH]] [[BLINK]]을 따라 갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 오로라 W의 [[INVISIBILITY]]을 볼 수 있음. \n 단, E2로 부딪히면 더 이상 모습이 보이지 않음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Aurora's W and E [[DASH]] and R [[DASH]] [[BLINK]].", "E1 [[TRUE_SIGHT]] can reveal Aurora's W [[INVISIBILITY]]. \n However, using E2 to collide will hide Aurora again."],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
