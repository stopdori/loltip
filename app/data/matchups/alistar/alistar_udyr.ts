// app/data/matchups/alistar/alistar_udyr.ts
import type { MatchupSummary } from "../_types";

export const alistar_udyr: MatchupSummary = {
  champs: ["alistar", "udyr"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["알리스타 R의 [[CC_CLEANSE]]로 우디르 E의 [[STUN]]을 해제할 수 있음.", 
        "알리스타 R의 [[CC_CLEANSE]]로 우디르 R, [[EMPOWERED]] R의 지속[[SLOW]]는 해제해도 다시 걸림."],
      en: ["Alistar's R [[CC_CLEANSE]] can cleanse Udyr's E [[STUN]].", "Udyr's R and [[EMPOWERED]] R persistent [[SLOW]] will reapply after being cleansed by Alistar's R [[CC_CLEANSE]]."],
    },
    udyr: {
      ko: [],
      en: [],
    },
  },
};
