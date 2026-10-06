// app/data/matchups/mel/mel_zeri.ts
import type { MatchupSummary } from "../_types";

export const mel_zeri: MatchupSummary = {
  champs: ["mel", "zeri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 제리 평타, Q(일반 / E [[EMPOWERED]] / R [[EMPOWERED]] 적중 피해), W(일반)의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 제리 Q(R [[EMPOWERED]] [[CHAIN]] 피해), W([[WALL_COLLISION]]), R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 제리 E(일반, 벽 이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Zeri's basic attacks, Q (normal / E [[EMPOWERED]] / R [[EMPOWERED]] hit damage), and W (normal) [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Zeri's Q (R [[EMPOWERED]] [[CHAIN]] damage), W ([[WALL_COLLISION]]), or R. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Zeri's E (normal, wall traversal) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    zeri: {
      ko: [],
      en: [],
    },
  },
};
