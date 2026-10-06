// app/data/matchups/mel/mel_riven.ts
import type { MatchupSummary } from "../_types";

export const mel_riven: MatchupSummary = {
  champs: ["mel", "riven"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    mel: {
      ko: ["W의 [[REFLECT]]로 리븐 R2의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 리븐 평타(일반, Q의 [[BUFF_STACK]], R의 [[EMPOWERED]]), Q, W를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 리븐 Q, E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Riven's R2 [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Riven's basic attacks (normal, Q [[BUFF_STACK]], R [[EMPOWERED]]), Q, or W. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Riven's Q and E [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
    riven: {
      ko: [],
      en: [],
    },
  },
};
