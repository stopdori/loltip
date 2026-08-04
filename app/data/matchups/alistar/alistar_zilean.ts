// app/data/matchups/alistar/alistar_zilean.ts
import type { MatchupSummary } from "../_types";

export const alistar_zilean: MatchupSummary = {
  champs: ["alistar", "zilean"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 질리언 Q의 [[STUN]], E의 [[SLOW]]를 해제할 수 있음.", 
        "R의 [[CC_CLEANSE]]로 질리언 Q(폭탄) 자체의 [[DEBUFF]]를 해제할 수 없음."],
      en: ["R [[CC_CLEANSE]] can cleanse Zilean's Q [[STUN]] and E [[SLOW]].", "R [[CC_CLEANSE]] cannot cleanse the [[DEBUFF]] from Zilean's Q (bomb) itself."],
    },
    zilean: {
      ko: [],
      en: [],
    },
  },
};
