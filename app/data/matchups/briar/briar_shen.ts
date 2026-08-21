// app/data/matchups/briar/briar_shen.ts
import type { MatchupSummary } from "../_types";

export const briar_shen: MatchupSummary = {
  champs: ["briar", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]], [[FEAR]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 쉔 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 쉔 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 쉔 E의 [[TAUNT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 쉔 E의 [[TAUNT]]을 무시할 수 있음."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]], [[FEAR]] can interrupt Shen's R [[SKILL_CHANNEL]].",
        "Q [[STUN]] cannot interrupt Shen's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Shen's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Shen's E [[TAUNT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Shen's E [[TAUNT]]."
      ],
    },
    shen: {
      ko: [],
      en: [],
    },
    },
  common: {
    ko: ["R2의 [[HOMING]] [[DASH]]으로 쉔 E의 [[DASH]], R의 [[BLINK]]을 따라갈 수 있음. \n 단, 쉔과 충돌하면 [[HOMING]] 종료. [[CLIP:https://www.youtube.com/shorts/04UTpdFAneE]]"],
    en: ["R2 [[HOMING]] [[DASH]] can follow Shen's E [[DASH]] and R [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Shen. [[CLIP:https://www.youtube.com/shorts/04UTpdFAneE]]"],
  },
};
