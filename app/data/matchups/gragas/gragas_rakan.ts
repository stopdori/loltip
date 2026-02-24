// app/data/matchups/gragas/gragas_rakan.ts
import type { MatchupSummary } from "../_types";

export const gragas_rakan: MatchupSummary = {
  champs: ["gragas", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 라칸 W, E를 끊을 수 있음"],
      en: ["Gragas's E or R can interrupt Rakan's W or E"],
    },
    rakan: {
      ko: ["라칸 R에 그라가스 E를 부딪히면 그라가스 E가 적중하고 라칸R이 적중함"],
      en: ["When Gragas's E collides with Rakan's R, both Gragas's E and Rakan's R will hit"],
    },
  },
};
