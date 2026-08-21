// app/data/matchups/briar/briar_skarner.ts
import type { MatchupSummary } from "../_types";

export const briar_skarner: MatchupSummary = {
  champs: ["briar", "skarner"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 스카너 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "E의 [[CAST_COMMIT]]으로 스카너 E의 [[STUN]] / E, R의 [[SUPPRESS]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 스카너 E의 [[STUN]] / E, R의 [[SUPPRESS]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 스카너 E의 [[SKILL_CHANNEL]], [[DASH]]을 따라갈 수 있음. \n 단, 스카너와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Skarner's E (wall movement) [[SKILL_CHANNEL]] [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Skarner's E [[STUN]] / E, R [[SUPPRESS]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Skarner's E [[STUN]] / E, R [[SUPPRESS]].",
        "R2 [[HOMING]] [[DASH]] can follow Skarner's E [[SKILL_CHANNEL]] and [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Skarner."
      ],
    },
    skarner: {
      ko: [],
      en: [],
    },
  },
};
