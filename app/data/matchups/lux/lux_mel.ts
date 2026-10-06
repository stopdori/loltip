// app/data/matchups/lux/lux_mel.ts
import type { MatchupSummary } from "../_types";

export const lux_mel: MatchupSummary = {
  champs: ["lux", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    lux: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 럭스 평타, Q, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, Q는 [[REFLECT]]되기 전에 [[PIERCE]]한 상태와 무관하게 1회 관통. [[CLIP:https://www.youtube.com/shorts/E0Uq62eiK6g]] \n 단, E는 도착 지점까지는 [[PROJECTILE]] 판정. 설치된 [[ZONE]]은 [[REFLECT]] 불가능. 멜이 직접 E2를 사용할 수 없음.", 
        "W의 [[REFLECT]]로 럭스 R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Lux's basic attacks, Q, W, and E [[PROJECTILE]]. [[EXIST]] \n However, Q passes through once, regardless of how it had [[PIERCE]]d before being [[REFLECT]]ed. [[CLIP:https://www.youtube.com/shorts/E0Uq62eiK6g]] \n However, E counts as a [[PROJECTILE]] until it reaches its destination. A placed [[ZONE]] cannot be [[REFLECT]]ed. Mel cannot use E2 herself.", 
        "W [[REFLECT]] cannot [[REFLECT]] Lux's R. [[NOT_EXIST]]"],
    },
  },
};
