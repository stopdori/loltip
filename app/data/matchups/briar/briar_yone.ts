// app/data/matchups/briar/briar_yone.ts
import type { MatchupSummary } from "../_types";

export const briar_yone: MatchupSummary = {
  champs: ["briar", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 요네 Q3, E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음. \n 단, Q3의 [[PROJECTILE]]는 끊을 수 없음.",
        "E의 [[CAST_COMMIT]]으로 요네 Q3의 [[AIRBORNE]] / R의 [[STUN]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 요네 Q3의 [[AIRBORNE]] / R의 [[STUN]], [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 요네 E1의 [[DASH]] / E2의 [[UNSTOPPABLE]] [[DASH]] / R의 [[BLINK]]을 따라갈 수 있음. \n 단, 요네와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Yone's Q3, E1, and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Yone's Q3 and E1 [[DASH]]. \n However, Q3's [[PROJECTILE]] cannot be interrupted.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Yone's Q3 [[AIRBORNE]] / R [[STUN]], [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Yone's Q3 [[AIRBORNE]] / R [[STUN]], [[KNOCKBACK]].",
        "R2 [[HOMING]] [[DASH]] can follow Yone's E1 [[DASH]] / E2 [[UNSTOPPABLE]] [[DASH]] / R [[BLINK]]. \n However, the [[HOMING]] ends upon colliding with Yone."],
    },
    yone: {
      ko: [],
      en: [],
    },
  },
};
