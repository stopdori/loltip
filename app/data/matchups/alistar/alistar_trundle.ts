// app/data/matchups/alistar/alistar_trundle.ts
import type { MatchupSummary } from "../_types";

export const alistar_trundle: MatchupSummary = {
  champs: ["alistar", "trundle"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 트런들 Q의 [[SLOW]], E([[TERRAIN]])의 [[AIRBORNE]]을 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 트런들 E([[TERRAIN]])의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Trundle's Q [[SLOW]] and E ([[TERRAIN]]) [[AIRBORNE]].", "Trundle's E ([[TERRAIN]]) persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    trundle: {
      ko: [],
      en: [],
    },
  },
};
