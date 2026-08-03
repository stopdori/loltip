// app/data/matchups/akali/akali_rammus.ts
import type { MatchupSummary } from "../_types";

export const akali_rammus: MatchupSummary = {
  champs: ["akali", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 람머스 R의 [[DASH]]을 따라갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Rammus's R [[DASH]]."],
    },
    rammus: {
      ko: ["람머스 Q에 아칼리 E2가 부딪히면, 서로 데미지를 받고 람머스 Q는 해제.",
        "람머스 Q에 아칼리 R1이 부딪히면, 아칼리만 데미지를 받고 R2를 사용할 수 있음. 람머스 Q는 해제.",
        "람머스 Q에 아칼리 R2가 부딪히면, 아칼리만 데미지를 받음. 람머스 Q는 해제. \n 단, 아칼리 R2를 람머스 몸체에 쓰지 않고 약간 비스듬하게 사용하면 아칼리 R2 만 유효하고 람머스 Q는 해제되지 않음."
      ],
      en: ["If Akali's E2 collides with Rammus's Q, both take damage and Rammus's Q is canceled.",
        "If Akali's R1 collides with Rammus's Q, only Akali takes damage but can still use R2. Rammus's Q is canceled.",
        "If Akali's R2 collides with Rammus's Q, only Akali takes damage. Rammus's Q is canceled. \n However, if Akali uses R2 slightly off to the side rather than directly at Rammus, only Akali's R2 lands and Rammus's Q is not canceled."
      ],
    },
  },
};
