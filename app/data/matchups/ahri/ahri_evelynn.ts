// app/data/matchups/ahri/ahri_evelynn.ts
import type { MatchupSummary } from "../_types";

export const ahri_evelynn: MatchupSummary = {
  champs: ["ahri", "evelynn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E([[CHARM]])의 [[KNOCKDOWN]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 있음. [[EXIST]]"],
      en: ["E ([[CHARM]])'s [[KNOCKDOWN]] can interrupt Evelynn's [[EMPOWERED]] E [[DASH]]. [[EXIST]]"],
    },
    evelynn: {
      ko: ["이블린 W의 [[CHARM]]으로 아리 R의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]. \n 단, [[CHARM]]은 남아있음."],
      en: ["Evelynn's W [[CHARM]] cannot interrupt Ahri's R [[DASH]]. [[NOT_EXIST]]."],
    },
  },
  common: {
    ko: ["아리 E의 [[CHARM]]은 [[KNOCKDOWN]] 효과가 있어서 [[DASH]] 종류를 끊을 수 있음. [[EXIST]]. \n 이블린의 [[CHARM]]은 [[KNOCKDOWN]] 효과가 없어서 [[DASH]] 종류를 끊을 수 없음. [[NOT_EXIST]]."],
    en: ["Ahri's E ([[CHARM]]) has [[KNOCKDOWN]], so it can interrupt [[DASH]]-type skills. [[EXIST]]. \n Evelynn's [[CHARM]] has no [[KNOCKDOWN]], so it cannot interrupt [[DASH]]-type skills. [[NOT_EXIST]]."],
  },
};
