// app/data/matchups/alistar/alistar_volibear.ts
import type { MatchupSummary } from "../_types";

export const alistar_volibear: MatchupSummary = {
  champs: ["alistar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 Q, W, E로 볼리베어 Q(추격단계)를 끊을 수 있음", "알리스타 Q, W, E로 볼리베어 Q(공격단계)를 끊을 수 없음", "알리스타 R의 [[CC_CLEANSE]]로 볼리베어 Q의 [[STUN]], E R의 [[SLOW]]를 해제할 수 있음"],
      en: ["Alistar's Q, W, and E can interrupt Volibear's Q(pursuit phase)", "Alistar's Q, W, and E cannot interrupt Volibear's Q(attack phase)", "Alistar's R [[CC_CLEANSE]] can cleanse Volibear's Q [[STUN]], E R [[SLOW]]"],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
