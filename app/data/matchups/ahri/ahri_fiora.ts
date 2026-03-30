// app/data/matchups/ahri/ahri_fiora.ts
import type { MatchupSummary } from "../_types";

export const ahri_fiora: MatchupSummary = {
  champs: ["ahri", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CAHRM]]으로 피오라 Q를 끊을 수 있음. 즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Fiora's Q"],
    },
    fiora: {
      ko: ["피오라 W(응수)로 아리 E의 [[CAHRM]]을 무시하고 [[STUN]]을 걸 수 있음."],
      en: ["Fiora's W can ignore Ahri's E and apply a [[STUN]]"],
    },
  },
};
