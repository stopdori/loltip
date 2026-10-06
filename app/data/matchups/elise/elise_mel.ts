// app/data/matchups/elise/elise_mel.ts
import type { MatchupSummary } from "../_types";

export const elise_mel: MatchupSummary = {
  champs: ["elise", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    elise: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 엘리스 인간폼 평타, Q, W, E의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 엘리스 거미폼 평타, Q를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Elise's Human Form basic attacks, Q, W, and E [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Elise's Spider Form basic attacks or Q. [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Elise's Spider Form Q [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
