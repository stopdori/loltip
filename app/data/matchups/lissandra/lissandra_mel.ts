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
      ko: ["멜 W의 [[REFLECT]]로 리산드라 Q의 [[PROJECTILE]]를 반사할 수 있음. [[EXIST]]"],
      en: ["Mel's W [[REFLECT]] can reflect Lissandra's Q [[PROJECTILE]]. [[EXIST]]"],
    },
  },
};
