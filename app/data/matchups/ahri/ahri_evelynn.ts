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
      ko: ["아리 E의 [[CHARM]]으로 이블린 P([[CAMOUFLAGE]])상태의 E를 끊을 수 있음.\n즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Evelynn's E"],
    },
    evelynn: {
      ko: ["이블린 W의 [[CHARM]]으로 아리 R을 끊을 수 있음"],
      en: ["Evelynn's W [[CHARM]] can interrupt Ahri's R"],
    },
  },
};
