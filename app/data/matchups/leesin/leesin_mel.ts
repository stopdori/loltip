// app/data/matchups/leesin/leesin_mel.ts
import type { MatchupSummary } from "../_types";

export const leesin_mel: MatchupSummary = {
  champs: ["leesin", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    leesin: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 리 신 Q1의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q2를 사용할 수 없음.", 
        "W의 [[REFLECT]]로 리 신 평타, Q2, E, E2, R(일반, 충돌 피해)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 리 신 Q2, W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Lee Sin's Q1 [[PROJECTILE]]. [[EXIST]] \n However, Q2 cannot be used.", 
        "W [[REFLECT]] cannot [[REFLECT]] Lee Sin's basic attacks, Q2, E, E2, or R (normal, collision damage). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Lee Sin's Q2 and W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
