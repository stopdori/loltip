// app/data/matchups/hwei/hwei_mel.ts
import type { MatchupSummary } from "../_types";

export const hwei_mel: MatchupSummary = {
  champs: ["hwei", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    hwei: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 흐웨이 평타, QQ, QE, WQ, EQ, EW([[ZONE]] 생성, [[ZONE]] 발동), R의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 흐웨이 QW, WW, WE, EE를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]"],
      en: ["W [[REFLECT]] can [[REFLECT]] Hwei's basic attacks, QQ, QE, WQ, EQ, EW ([[ZONE]] creation, [[ZONE]] trigger), and R [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Hwei's QW, WW, WE, or EE. [[NOT_EXIST]]"],
    },
  },
};
