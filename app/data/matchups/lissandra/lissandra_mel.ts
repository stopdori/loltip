// app/data/matchups/lissandra/lissandra_mel.ts
import type { MatchupSummary } from "../_types";

export const lissandra_mel: MatchupSummary = {
  champs: ["lissandra", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lissandra: {
      ko: ["멜 E의 [[ROOT]]을 맞았을 때, 리산드라 E2를 사용할 수 없음. [[NOT_EXIST]]"],
      en: ["When hit by Mel's E [[ROOT]], Lissandra cannot use E2. [[NOT_EXIST]]"],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 리산드라 평타, Q(적중, 분쇄), E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E2는 사용할 수 없음.", 
        "W의 [[REFLECT]]로 리산드라 P(얼음 노예), W, R(상대, 자신)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Lissandra's basic attacks, Q (hit, shatter), and E [[PROJECTILE]]. [[EXIST]] \n However, E2 cannot be used.", 
        "W [[REFLECT]] cannot [[REFLECT]] Lissandra's P (Frozen Thralls), W, or R (enemy, self). [[NOT_EXIST]]"],
    },
  },
};
