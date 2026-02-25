// app/data/matchups/gragas/gragas_gwen.ts
import type { MatchupSummary } from "../_types";

export const gragas_gwen: MatchupSummary = {
  champs: ["gragas", "gwen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E가 그웬 W 범위 밖에서 사용하여, 범위 안쪽으로 들어가도 스킬이 유효함"],
      en: ["Gragas's E remains effective even if cast from outside Gwen's W range, as long as he enters the zone during the dash"],
    },
    gwen: {
      ko: ["그웬 W로 그라가스 Q, W(범위피해), R을 범위 밖에서 맞지 않음"],
      en: [],
    },
  },
};
