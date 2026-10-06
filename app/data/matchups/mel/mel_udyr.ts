// app/data/matchups/mel/mel_udyr.ts
import type { MatchupSummary } from "../_types";

export const mel_udyr: MatchupSummary = {
  champs: ["mel", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 우디르 [[EMPOWERED]] Q의 번개 [[CHAIN]] [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 우디르 평타, 일반(Q, W, E, R), [[EMPOWERED]](Q의 평타, W, E, R)을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 우디르 E(일반, [[EMPOWERED]])의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Udyr's [[EMPOWERED]] Q lightning [[CHAIN]] [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Udyr's basic attacks, normal (Q, W, E, R), or [[EMPOWERED]] (Q basic attacks, W, E, R). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Udyr's E (normal, [[EMPOWERED]]) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
