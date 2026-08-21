// app/data/matchups/briar/briar_sion.ts
import type { MatchupSummary } from "../_types";

export const briar_sion: MatchupSummary = {
  champs: ["briar", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 사이온 Q / R의 [[AIRBORNE]], [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 사이온 Q / R의 [[AIRBORNE]], [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 사이온 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 사이온과 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Sion's Q [[SKILL_CHARGED]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Sion's Q or R [[AIRBORNE]], [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Sion's Q or R [[AIRBORNE]], [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Sion's R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Sion."
      ],
    },
    sion: {
      ko: [],
      en: [],
    },
  },
};
