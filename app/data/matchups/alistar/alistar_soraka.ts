// app/data/matchups/alistar/alistar_soraka.ts
import type { MatchupSummary } from "../_types";

export const alistar_soraka: MatchupSummary = {
  champs: ["alistar", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 소라카 E의 [[SILENCE]]을 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 소라카 E의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Soraka's E [[SILENCE]].", "Soraka's E persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    soraka: {
      ko: [],
      en: [],
    },
  },
};
