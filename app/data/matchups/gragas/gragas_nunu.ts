// app/data/matchups/gragas/gragas_nunu.ts
import type { MatchupSummary } from "../_types";

export const gragas_nunu: MatchupSummary = {
  champs: ["gragas", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 누누 R을 끊을 수 있음", "그라가스 E와 누누 W는 상황에따라 판정이 달라짐\n누누가 W를 충분히 굴렸을 때 그라가스 E와 부딪히면 누누 승\n그라가스 E를 보고 누누가 W를 짧게 쓰면 서로 당함\n누누 W를 굴리는 중 그라가스가 뒤에서 E를 하면 그라가스 승"],
      en: ["Gragas's E or R can interrupt Nunu's R", "The interaction between Gragas's E and Nunu's W varies depending on the situation\nIf Nunu has rolled his W long enough, Nunu wins the collision with Gragas's E\nIf Nunu uses a short W in response to Gragas's E, both are hit\nIf Gragas hits E from behind while Nunu is rolling W, Gragas wins"],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
