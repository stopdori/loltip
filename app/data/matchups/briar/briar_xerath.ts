// app/data/matchups/briar/briar_xerath.ts
import type { MatchupSummary } from "../_types";

export const briar_xerath: MatchupSummary = {
  champs: ["briar", "xerath"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 제라스 Q의 [[SKILL_CHARGED]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 제라스 E의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 제라스 E의 [[STUN]]을 무시할 수 있음."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Xerath's Q [[SKILL_CHARGED]] and R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Xerath's E [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Xerath's E [[STUN]]."
      ],
    },
    xerath: {
      ko: [],
      en: [],
    },
  },
};
