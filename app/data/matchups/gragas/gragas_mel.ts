// app/data/matchups/gragas/gragas_mel.ts
import type { MatchupSummary } from "../_types";

export const gragas_mel: MatchupSummary = {
  champs: ["gragas", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 그라가스 Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q, R은 도착 지점까지는 [[PROJECTILE]] 판정. 멜이 직접 Q2를 사용할 수 없음.", 
        "W의 [[REFLECT]]로 그라가스 평타, W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 그라가스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Gragas's Q and R [[PROJECTILE]]. [[EXIST]] \n However, Q and R count as [[PROJECTILE]]s until they reach their destination. Mel cannot use Q2 herself.", 
        "W [[REFLECT]] cannot [[REFLECT]] Gragas's basic attacks, W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Gragas's E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
