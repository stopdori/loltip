// app/data/matchups/briar/briar_leona.ts
import type { MatchupSummary } from "../_types";

export const briar_leona: MatchupSummary = {
  champs: ["briar", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 레오나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 레오나 E의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 레오나 Q, R의 [[STUN]] / E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 레오나 Q, R의 [[STUN]] / E의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 레오나 E의 [[DASH]]을 따라갈 수 있음. \n 단, 레오나와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Leona's E [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Leona's E [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Leona's Q or R [[STUN]] or E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Leona's Q and R [[STUN]] and E [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Leona's E [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Leona."],
    },
    leona: {
      ko: [],
      en: [],
    },
  },
};
