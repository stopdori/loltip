// app/data/matchups/jinx/jinx_mel.ts
import type { MatchupSummary } from "../_types";

export const jinx_mel: MatchupSummary = {
  champs: ["jinx", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    jinx: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 징크스 평타(게틀링, 로켓), W, E([[TRAP]]), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, E는 도착 지점까지는 [[PROJECTILE]] 판정. 설치된 [[TRAP]]은 [[REFLECT]] 불가능. \n 단, R의 [[DISTANCE_SCALE]] 비례 [[EMPOWERED]] 효과는 [[REFLECT]]되기 전의 상태와 상관없이 멜에게서 새로 생성되는 판정."],
      en: ["W [[REFLECT]] can [[REFLECT]] Jinx's basic attacks (minigun, rocket), W, E ([[TRAP]]), and R [[PROJECTILE]]. [[EXIST]] \n However, E counts as a [[PROJECTILE]] until it reaches its destination. A placed [[TRAP]] cannot be [[REFLECT]]ed. \n However, R's [[DISTANCE_SCALE]] [[EMPOWERED]] effect is recalculated from Mel, regardless of its state before being [[REFLECT]]ed."],
    },
  },
};
