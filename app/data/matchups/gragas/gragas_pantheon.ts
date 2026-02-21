// app/data/matchups/gragas/gragas_pantheon.ts
import type { MatchupSummary } from "../_types";

export const gragas_pantheon: MatchupSummary = {
  champs: ["gragas", "pantheon"],
  highlightsByChamp: {
    gragas: {
      ko: ["그라가스 E, R로 판테온 W를 무효화 시킬 수 있음"],
      en: ["Gragas's E or R can neutralize Pantheon's W"],
    },
    pantheon: {
      ko: ["판테온 E를 그라가스 방향으로 사용한다면, 판테온 뒤쪽에 술통들이 터져도 데미지가 들어오지 않음"],
      en: ["If Pantheon uses E facing Gragas, no damage is taken even if barrels explode behind Pantheon"],
    },
  },
};
