// app/data/matchups/mel/mel_ornn.ts
import type { MatchupSummary } from "../_types";

export const mel_ornn: MatchupSummary = {
  champs: ["mel", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 오른 Q, R1, R2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]] \n 단, 오른 P는 Q, R1, R2에 함께 [[REFLECT]]되어 적에게 [[DEBUFF]]가 생기지만, 발동시킬 수 없음.", 
        "W의 [[REFLECT]]로 오른 평타(일반, [[EMPOWERED]]) W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 오른 E, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Ornn's Q, R1, and R2 [[PROJECTILE]]. [[EXIST]] \n However, Ornn's P is [[REFLECT]]ed along with Q, R1, and R2, applying a [[DEBUFF]] to enemies, but it cannot be triggered.", 
        "W [[REFLECT]] cannot [[REFLECT]] Ornn's basic attacks (normal, [[EMPOWERED]]), W, or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Ornn's E and R2 [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
