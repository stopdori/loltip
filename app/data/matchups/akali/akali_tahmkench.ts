// app/data/matchups/akali/akali_tahmkench.ts
import type { MatchupSummary } from "../_types";

export const akali_tahmkench: MatchupSummary = {
  champs: ["akali", "tahmkench"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["아칼리 E2로 탐켄치 W를 따라갈 수 있음"],
      en: ["Akali's E2 can follow Tahm Kench's W"],
    },
    tahmkench: {
      ko: ["탐켄치 R로 아칼리 E를 맞은 아군을 삼키면 아칼리가 E2를 사용할 수 없음.", "아칼리가 E2로 아군에게 날아올 때 탐켄치가 아군을 삼키면, 아칼리는 아군 챔피언이 있던 위치로 이동하고 데미지 무효화"],
      en: ["If Tahm Kench devours an ally hit by Akali's E using R, Akali cannot use E2", "When Akali dashes toward an ally with E2, if Tahm Kench devours that ally, Akali moves to where the ally was and the damage is nullified"],
    },
  },
};
