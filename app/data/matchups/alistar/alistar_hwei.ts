// app/data/matchups/alistar/alistar_hwei.ts
import type { MatchupSummary } from "../_types";

export const alistar_hwei: MatchupSummary = {
  champs: ["alistar", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 흐웨이 EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[SLOW]], [[AIRBORNE]]을 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 흐웨이 QE, R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["R [[CC_CLEANSE]] can cleanse Hwei's EQ [[FEAR]], EW [[ROOT]], EE [[SLOW]], and [[AIRBORNE]].", "R [[CC_CLEANSE]] can cleanse Hwei's QE and R persistent [[SLOW]], but it will reapply after being cleansed."],
    },
    hwei: {
      ko: [],
      en: [],
    },
  },
};
