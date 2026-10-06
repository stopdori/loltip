// app/data/matchups/mel/mel_vex.ts
import type { MatchupSummary } from "../_types";

export const mel_vex: MatchupSummary = {
  champs: ["mel", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 벡스 일반 (평타, Q, E, R1) / [[EMPOWERED]] (Q, E)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, [[REFLECT]]된 [[EMPOWERED]] 스킬들의 [[FEAR]]도 적용. \n 단, R1이 [[REFLECT]]되면 벡스는 R2를 사용할 수 없음. \n 단, [[REFLECT]]된 R1을 상대에게 적중 시켜도 멜이 R2를 사용할 수 없음.", 
        "W의 [[REFLECT]]로 벡스 [[EMPOWERED]] 평타, W(일반, [[EMPOWERED]]), R2를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Vex's normal (basic attacks, Q, E, R1) / [[EMPOWERED]] (Q, E) [[PROJECTILE]]. [[EXIST]] \n However, the [[FEAR]] of [[REFLECT]]ed [[EMPOWERED]] skills also applies. \n However, if R1 is [[REFLECT]]ed, Vex cannot use R2. \n However, even if the [[REFLECT]]ed R1 hits an enemy, Mel cannot use R2.", 
        "W [[REFLECT]] cannot [[REFLECT]] Vex's [[EMPOWERED]] basic attacks, W (normal, [[EMPOWERED]]), or R2. [[NOT_EXIST]]"],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
