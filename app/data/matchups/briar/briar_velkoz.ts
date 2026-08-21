// app/data/matchups/briar/briar_velkoz.ts
import type { MatchupSummary } from "../_types";

export const briar_velkoz: MatchupSummary = {
  champs: ["briar", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 벨코즈 E의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 벨코즈 E의 [[AIRBORNE]]을 무시할 수 있음."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Vel'Koz's E [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Vel'Koz's E [[AIRBORNE]]."
      ],
    },
    velkoz: {
      ko: [],
      en: [],
    },
  },
};
