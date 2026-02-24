// app/data/matchups/gragas/gragas_milio.ts
import type { MatchupSummary } from "../_types";

export const gragas_milio: MatchupSummary = {
  champs: ["gragas", "milio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: [],
      en: [],
    },
    milio: {
      ko: ["밀리오 Q가 그라가스 E를 밀어낼 수 있음\n근거리에서는 밀리오가 그라가스 E에 적중 당해 밀려나고 데미지가 들어옴. 그 이후 밀리오 Q에 그라가스가 밀려남"],
      en: ["Milio's Q can knock back Gragas's E", "At close range, Milio is hit and damaged by Gragas's E first, then Gragas is knocked back by Milio's Q"],
    },
  },
};
