// app/data/matchups/alistar/alistar_renata.ts
import type { MatchupSummary } from "../_types";

export const alistar_renata: MatchupSummary = {
  champs: ["alistar", "renata"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 레나타 Q의 [[ROOT]] [[STUN]], E의 [[SLOW]], R의 [[BERSERK]]을 해제할 수 있음.",
        "알리스타가 레나타 Q1을 맞고 R의 [[CC_CLEANSE]] 사용하면, 레나타가 Q2를 사용할 수 없음.",
      ],
      en: ["R [[CC_CLEANSE]] can cleanse Renata Glasc's Q [[ROOT]][[STUN]], E [[SLOW]], and R [[BERSERK]].", "If Alistar's R [[CC_CLEANSE]] is used immediately upon being hit by Renata's Q1, Renata cannot reactivate Q2."],
    },
    renata: {
      ko: [],
      en: [],
    },
  },
};
