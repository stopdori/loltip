// app/data/matchups/ahri/ahri_elise.ts
import type { MatchupSummary } from "../_types";

export const ahri_elise: MatchupSummary = {
  champs: ["ahri", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 엘리스 거미폼 Q를 끊을 수 있음. 즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Elise's spider form Q"],
    },
    elise: {
      ko: ["엘리스 거미폼 변신으로 소환된 새끼 거미들로 아리 E(매혹)를 막을 수 있음."],
      en: ["The spiderlings summoned by Elise's spider form transformation can block Ahri's E"],
    },
  },
};
