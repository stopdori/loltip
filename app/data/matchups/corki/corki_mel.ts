// app/data/matchups/corki/corki_mel.ts
import type { MatchupSummary } from "../_types";

export const corki_mel: MatchupSummary = {
  champs: ["corki", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    corki: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 코르키 평타, Q, R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 코르키 W, E를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 코르키 W의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Corki's basic attacks, Q, and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Corki's W or E. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Corki's W [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
