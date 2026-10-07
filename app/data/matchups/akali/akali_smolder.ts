// app/data/matchups/akali/akali_smolder.ts
import type { MatchupSummary } from "../_types";

export const akali_smolder: MatchupSummary = {
  champs: ["akali", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 스몰더 E의 [[IGNORE_TERRAIN]]를 따라갈 수 있음. [[EXIST]] \n 단, 벽을 통과중일 때 부딪히면 스몰더는 데미지를 받지만 계속 이동하고, 아칼리는 벽에서 나옴."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]] \n However, if they collide while Smolder is passing through a wall, Smolder takes damage but keeps moving, and Akali exits the wall."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
