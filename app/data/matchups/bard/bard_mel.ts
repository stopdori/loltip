// app/data/matchups/bard/bard_mel.ts
import type { MatchupSummary } from "../_types";

export const bard_mel: MatchupSummary = {
  champs: ["bard", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: [],
      en: [],
    },
    mel: {
      ko: ["W의 [[REFLECT]]로 바드 평타, Q의 [[PROJECTILE]]를 [[REFLECT]]할 수 있음. [[EXIST]]", 
        "W의 [[REFLECT]]로 바드 평타([[ON_HIT]] [[AOE]] 피해), E(터널), R(존야)를 [[REFLECT]]할 수 없음. [[NOT_EXIST]]", 
      "E의 [[ROOT]]으로 바드 E(벽 이동)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[ROOT]]은 남아있음."],
      en: ["W [[REFLECT]] can [[REFLECT]] Bard's basic attacks and Q [[PROJECTILE]]. [[EXIST]]", 
        "W [[REFLECT]] cannot [[REFLECT]] Bard's basic attacks ([[ON_HIT]] [[AOE]] damage), E (tunnel), or R (Zhonya). [[NOT_EXIST]]", 
        "E [[ROOT]] cannot interrupt Bard's E (tunnel) [[DASH]]. [[NOT_EXIST]] \n However, the [[ROOT]] still applies."],
    },
  },
};
