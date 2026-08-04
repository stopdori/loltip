// app/data/matchups/alistar/alistar_nunu.ts
import type { MatchupSummary } from "../_types";

export const alistar_nunu: MatchupSummary = {
  champs: ["alistar", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 누누 W의 [[AIRBORNE]], E의 [[SLOW]], [[ROOT]]을 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 누누 R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["R [[CC_CLEANSE]] can cleanse Nunu's W [[AIRBORNE]], E [[SLOW]] and [[ROOT]].", "Nunu's R persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    nunu: {
      ko: [],
      en: [],
    },
  },
};
