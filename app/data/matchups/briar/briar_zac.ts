// app/data/matchups/briar/briar_zac.ts
import type { MatchupSummary } from "../_types";

export const briar_zac: MatchupSummary = {
  champs: ["briar", "zac"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 자크 E의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 자크 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 자크 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 자크 Q의 [[GRAB]] / E의 [[AIRBORNE]] / R의 [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 자크 Q의 [[GRAB]] / E의 [[AIRBORNE]] / R의 [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 자크 E의 [[DASH]]을 따라갈 수 있음. \n 단, 자크와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Zac's E [[SKILL_CHARGED]].",
        "Q [[STUN]] cannot interrupt Zac's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Zac's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Zac's Q [[GRAB]] / E [[AIRBORNE]] / R [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Zac's Q [[GRAB]] / E [[AIRBORNE]] / R [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Zac's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Zac."
      ],
    },
    zac: {
      ko: [],
      en: [],
    },
  },
};
