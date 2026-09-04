// app/data/matchups/alistar/alistar_drmundo.ts
import type { MatchupSummary } from "../_types";

export const alistar_drmundo: MatchupSummary = {
  champs: ["alistar", "drmundo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 문도 박사 Q의 [[SLOW]]를 해제할 수 있음."],
      en: ["R [[CC_CLEANSE]] can cleanse Dr. Mundo's Q [[SLOW]]."],
    },
    drmundo: {
      ko: ["P의 [[CC_IMMUNE]] 효과로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 한 번 무시할 수 있음. \n 이때, 문도 P의 화학 통 [[DROP]]."],
      en: ["P's [[CC_IMMUNE]] effect can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] once.\nAt this time, P also [[DROP]]s a canister."],
    },
  },
};
