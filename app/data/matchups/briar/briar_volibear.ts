// app/data/matchups/briar/briar_volibear.ts
import type { MatchupSummary } from "../_types";

export const briar_volibear: MatchupSummary = {
  champs: ["briar", "volibear"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 볼리베어 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 볼리베어 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 볼리베어 Q의 [[STUN]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 볼리베어 Q의 [[STUN]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 볼리베어 Q의 [[DASH]], R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 볼리베어와 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Volibear's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Volibear's Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Volibear's Q [[STUN]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Volibear's Q [[STUN]].",
        "R2 [[HOMING]] [[DASH]] can follow Volibear's Q [[DASH]] and R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Volibear."],
    },
    volibear: {
      ko: [],
      en: [],
    },
  },
};
