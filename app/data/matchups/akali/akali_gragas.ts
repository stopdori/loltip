// app/data/matchups/akali/akali_gragas.ts
import type { MatchupSummary } from "../_types";

export const akali_gragas: MatchupSummary = {
  champs: ["akali", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 그라가스 E를 따라 갈 수 있음", "아칼리 E2와 그라가스 E가 부딪히면 서로 데미지가 들어가고 아칼리는 [[AIRBORNE]]과 [[STUN]]"],
      en: ["Akali's E2 can follow Gragas's E", "When Akali's E2 collides with Gragas's E, both take damage and Akali is [[AIRBORNE]] and [[STUN]]ned"],
    },
    gragas: {
      ko: ["그라가스 R로 아칼리 E2를 끊을 수 있음"],
      en: ["Gragas's R can interrupt Akali's E2"],
    },
  },
};
