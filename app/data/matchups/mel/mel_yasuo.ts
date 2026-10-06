// app/data/matchups/mel/mel_yasuo.ts
import type { MatchupSummary } from "../_types";

export const mel_yasuo: MatchupSummary = {
  champs: ["mel", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 야스오 Q3의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 야스오 평타, Q(1~2), W, E, R을 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 야스오 E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Yasuo's Q3 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Yasuo's basic attacks, Q (1~2), W, E, or R. [[NOT_EXIST]]", 
        "E [[ROOT]] can interrupt Yasuo's E [[DASH]]. [[EXIST]]"],
    },
    yasuo: {
      ko: ["W의 [[WINDSHIELD]]으로 멜 평타, Q, W([[REFLECT]]된 Q3), E를 막을 수 있음. [[EXIST]]", 
        "W의 [[WINDSHIELD]]으로 멜 R을 막을 수 없음. [[NOT_EXIST]]"
      ],
      en: ["W [[WINDSHIELD]] can block Mel's basic attacks, Q, W ([[REFLECT]]ed Q3), and E. [[EXIST]]", 
        "W [[WINDSHIELD]] cannot block Mel's R. [[NOT_EXIST]]"],
    },
  },
};
