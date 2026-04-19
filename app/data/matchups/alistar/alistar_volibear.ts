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
      ko: ["알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]로 볼리베어 Q의 [[TRANSFORM]]을 해제시킬 수 있음.",
         "알리스타 R의 [[CC_CLEANSE]]로 볼리베어 Q의 [[STUN]] / E, R의 [[SLOW]]를 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] can interrupt Volibear's Q [[TRANSFORM]].", "Alistar's R [[CC_CLEANSE]] can cleanse Volibear's Q [[STUN]], E and R [[SLOW]]."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
