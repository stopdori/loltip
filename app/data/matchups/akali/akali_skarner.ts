// app/data/matchups/akali/akali_skarner.ts
import type { MatchupSummary } from "../_types";

export const akali_skarner: MatchupSummary = {
  champs: ["akali", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 따라갈 수 있음. [[EXIST]] \n 단, 벽을 통과중일때 아칼리가 부딪히면 스카너는 데미지를 받지만 계속 이동하고, 아칼리는 벽에서 나옴."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, if Akali collides with Skarner while he is passing through a wall, Skarner takes damage but keeps moving, and Akali exits the wall."],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
