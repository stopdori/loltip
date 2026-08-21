// app/data/matchups/briar/briar_vladimir.ts
import type { MatchupSummary } from "../_types";

export const briar_vladimir: MatchupSummary = {
  champs: ["briar", "vladimir"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 블라디미르 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R2의 [[HOMING]] [[DASH]]으로 블라디미르 W의 [[UNTARGETABLE]]을 따라갈 수 있음. \n 단, 블라디미르와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Vladimir's E [[SKILL_CHARGED]].",
        "R2 [[HOMING]] [[DASH]] can follow Vladimir's W [[UNTARGETABLE]]. \n However, the [[HOMING]] ends upon colliding with Vladimir."
      ],
    },
    vladimir: {
      ko: [],
      en: [],
    },
  },
};
