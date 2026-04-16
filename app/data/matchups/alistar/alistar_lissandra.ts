// app/data/matchups/alistar/alistar_lissandra.ts
import type { MatchupSummary } from "../_types";

export const alistar_lissandra: MatchupSummary = {
  champs: ["alistar", "lissandra"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 리산드라 Q의 [[SLOW]], W의 [[ROOT]], R의 [[STUN]]을 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 리산드라 P, R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Lissandra's Q [[SLOW]], W [[ROOT]], and R [[STUN]].", "Lissandra's P and R persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    lissandra: {
      ko: [],
      en: [],
    },
  },
};
