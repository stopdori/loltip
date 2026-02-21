// app/data/matchups/gragas/gragas_neeko.ts
import type { MatchupSummary } from "../_types";

export const gragas_neeko: MatchupSummary = {
  champs: ["gragas", "neeko"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 니코 R을 밀어 낼 수 있음"],
      en: ["Gragas's E or R can knock back Neeko's R"],
    },
    neeko: {
      ko: ["니코 E로 그라가스 E를 막을 수 없음"],
      en: ["Neeko's E cannot interrupt Gragas's E"],
    },
  },
};
