// app/data/matchups/gragas/gragas_skarner.ts
import type { MatchupSummary } from "../_types";

export const gragas_skarner: MatchupSummary = {
  champs: ["gragas", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["E(배치기), R의 [[KNOCKBACK]]으로 스카너 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]"],
      en: ["E (Body Slam) and R [[KNOCKBACK]] can interrupt Skarner's E [[IGNORE_TERRAIN]]. [[EXIST]]"],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
  common: {
    ko: ["그라가스 E(배치기)의 [[KNOCKBACK]]과 스카너 E의 [[IGNORE_TERRAIN]]의 [[SUPPRESS]]이 정면으로 부딪혔을 때 \n 판정은 대부분 그라가스가 이기는것으로 보임."],
    en: [],
  },
};
