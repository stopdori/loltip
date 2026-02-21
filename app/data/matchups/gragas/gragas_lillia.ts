// app/data/matchups/gragas/gragas_lillia.ts
import type { MatchupSummary } from "../_types";

export const gragas_lillia: MatchupSummary = {
  champs: ["gragas", "lillia"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 릴리아 W를 상황에 따라 끊을 수 있음. 자세한 내용은 릴리아에 서술했음"],
      en: ["Gragas's E or R can interrupt Lillia's W depending on the situation. Details are described in the Lillia section"],
    },
    lillia: {
      ko: ["릴리아 R로 그라가스 E를 끊을 수 없음"],
      en: ["illia's R cannot interrupt Gragas's"],
    },
  },
};
