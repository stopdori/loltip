// app/data/matchups/alistar/alistar_mordekaiser.ts
import type { MatchupSummary } from "../_types";

export const alistar_mordekaiser: MatchupSummary = {
  champs: ["alistar", "mordekaiser"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 모데카이저 E의 [[GRAB]]을 해제할 수 있음.", "R의 [[CC_CLEANSE]]로 모데카이저 R(이세계)을 해제할 수 없음."],
      en: ["R [[CC_CLEANSE]] can cleanse Mordekaiser's E [[GRAB]].", "R [[CC_CLEANSE]] cannot cleanse Mordekaiser's R (Death Realm)."],
    },
    mordekaiser: {
      ko: [],
      en: [],
    },
  },
};
