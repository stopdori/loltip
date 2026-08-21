// app/data/matchups/briar/briar_warwick.ts
import type { MatchupSummary } from "../_types";

export const briar_warwick: MatchupSummary = {
  champs: ["briar", "warwick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 워윅 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 워윅 E의 [[FEAR]], R의 [[SUPPRESS]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 워윅 Q의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 워윅과 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Warwick's R [[SKILL_CHANNEL]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Warwick's E [[FEAR]], R [[SUPPRESS]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Warwick's E [[FEAR]], R [[SUPPRESS]].",
        "R2 [[HOMING]] [[DASH]] can follow Warwick's Q [[DASH]] and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Warwick."
      ],
    },
    warwick: {
      ko: [],
      en: [],
    },
  },
};
