// app/data/matchups/ahri/ahri_leesin.ts
import type { MatchupSummary } from "../_types";

export const ahri_leesin: MatchupSummary = {
  champs: ["ahri", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 리신 Q2, W(방호)를 끊을 수 있음.\nQ2는 상대 몸에 닿아야 데미지가 들어가고, W도 리신 아군 챔피언에게 닿아야 [[SHIELD]]가 생긴다는 관점에서 완전히 무효."],
      en: ["Ahri's E can interrupt Lee Sin's Q2 and W"],
    },
    leesin: {
      ko: ["리신 R의 [[AIRBORNE]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Lee Sin's R can interrupt Ahri's R. The direction depends on the situation."],
    },
  },
};
