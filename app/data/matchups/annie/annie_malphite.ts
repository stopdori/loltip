// app/data/matchups/annie/annie_malphite.ts
import type { MatchupSummary } from "../_types";

export const annie_malphite: MatchupSummary = {
  champs: ["annie", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: [],
      en: [],
    },
    malphite: {
      ko: ["R의 [[AIRBORNE]]으로 애니 R로 [[SUMMON]]된 티버를 [[AIRBORNE]] 할 수 있음.",
        "R의 [[UNSTOPPABLE]]로 애니 P의 [[STUN]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]]은 남아있음."
      ],
      en: ["Malphite's R [[AIRBORNE]] can send Annie's R [[SUMMON]]ed Tibbers airborne.",
        "R [[UNSTOPPABLE]] can ignore Annie's P [[STUN]]. \n However, [[STUN]] remains after [[UNSTOPPABLE]] ends."
      ],
    },
  },
};
