// app/data/matchups/briar/briar_ornn.ts
import type { MatchupSummary } from "../_types";

export const briar_ornn: MatchupSummary = {
  champs: ["briar", "ornn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 오른 W, R2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 오른 W, R2의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 오른 Q, E, R2의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 오른 Q, E, R2의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 오른 E, R2의 [[DASH]]을 따라갈 수 있음. \n 단, 오른과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Ornn's W and R2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Ornn's W and R2 [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Ornn's Q, E, and R2 [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Ornn's Q, E, and R2 [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Ornn's E and R2 [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Ornn."],
    },
    ornn: {
      ko: [],
      en: [],
    },
  },
};
