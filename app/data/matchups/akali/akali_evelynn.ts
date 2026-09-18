// app/data/matchups/akali/akali_evelynn.ts
import type { MatchupSummary } from "../_types";

export const akali_evelynn: MatchupSummary = {
  champs: ["akali", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 이블린 [[EMPOWERED]] E의 [[DASH]], R의 [[BLINK]]을 따라 갈 수 있음.", 
        "E1의 [[TRUE_SIGHT]]로 이블린 P의 [[CAMOUFLAGE]]를 볼 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Evelynn's [[EMPOWERED]] E [[DASH]] and R [[BLINK]].", 
        "E1 [[TRUE_SIGHT]] can reveal Evelynn's P [[CAMOUFLAGE]]."],
    },
    evelynn: {
      ko: ["W의 [[CHARM]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[CHARM]]은 남아있음. \n 단, 아칼리 E2, R1, R2와 부딪히면 데미지는 유효."],
      en: ["W [[CHARM]] cannot interrupt Akali's E1, E2, R1, and R2 [[DASH]]. [[NOT_EXIST]] \n However, the [[CHARM]] still applies. \n However, colliding with Akali's E2, R1, or R2 still deals damage."],
    },
  },
};
