// app/data/matchups/briar/briar_vi.ts
import type { MatchupSummary } from "../_types";

export const briar_vi: MatchupSummary = {
  champs: ["briar", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q, E의 [[STUN]] / E의 [[KNOCKBACK]] / R의 [[DISRUPT]] [[FEAR]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "Q의 [[STUN]]로 바이 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 바이 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 바이 Q, R의 [[KNOCKBACK]] / R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 바이 Q, R의 [[KNOCKBACK]] / R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 바이 Q의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 바이와 충돌하면 [[HOMING]] 종료."
      ],
      en: ["Q and E [[STUN]] / E [[KNOCKBACK]] / R [[DISRUPT]] [[FEAR]] can interrupt Vi's Q [[SKILL_CHARGED]].",
        "Q [[STUN]] cannot interrupt Vi's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Vi's Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Vi's Q, R [[KNOCKBACK]] / R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Vi's Q, R [[KNOCKBACK]] / R [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Vi's Q [[DASH]] and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Vi."
      ],
    },
    vi: {
      ko: [],
      en: [],
    },
  },
};
