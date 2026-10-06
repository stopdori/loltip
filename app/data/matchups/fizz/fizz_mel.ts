// app/data/matchups/fizz/fizz_mel.ts
import type { MatchupSummary } from "../_types";

export const fizz_mel: MatchupSummary = {
  champs: ["fizz", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    fizz: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 피즈 R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 피즈 R의 효과는 [[REFLECT]]되기 전까지 [[DISTANCE_SCALE]]에 비례.", 
        "W의 [[REFLECT]]로 피즈 평타, Q, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 피즈 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Fizz's R [[PROJECTILE]]. [[EXIST]] \n However, Fizz's R effect scales with [[DISTANCE_SCALE]] traveled before being [[REFLECT]]ed.", 
        "W [[REFLECT]] cannot [[REFLECT]] Fizz's basic attacks, Q, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Fizz's Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
