// app/data/matchups/gragas/gragas_leblanc.ts
import type { MatchupSummary } from "../_types";

export const gragas_leblanc: MatchupSummary = {
  champs: ["gragas", "leblanc"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 르블랑 W를 끓을 수 있음"],
      en: ["Gragas's E can interrupt LeBlanc's W"],
    },
    leblanc: {
      ko: ["르블랑 E로 그라가스 E를 끊을 수 없음"],
      en: ["LeBlanc's E cannot interrupt Gragas's E"],
    },
  },
};
