// app/data/matchups/briar/briar_viego.ts
import type { MatchupSummary } from "../_types";

export const briar_viego: MatchupSummary = {
  champs: ["briar", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 비에고 W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 비에고 W의 [[DASH]]을 끊을 수 있음. \n 단, 비에고 W의 [[PROJECTILE]]는 끊기지 않음.",
        "E의 [[CAST_COMMIT]]으로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 비에고 P의 [[UNTARGETABLE]] [[BLINK]], W의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 비에고와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Viego's W [[SKILL_CHARGED]].",
        "Q [[STUN]] cannot interrupt Viego's W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Viego's W [[DASH]]. \n However, Viego's W [[PROJECTILE]] cannot be interrupted.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Viego's W [[STUN]], R [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Viego's W [[STUN]], R [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Viego's P [[UNTARGETABLE]] [[BLINK]], W [[DASH]], and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Viego."
      ],
    },
    viego: {
      ko: [],
      en: [],
    },
  },
};
