// app/data/matchups/briar/briar_leesin.ts
import type { MatchupSummary } from "../_types";

export const briar_leesin: MatchupSummary = {
  champs: ["briar", "leesin"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 리신 Q2, W의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 리신 Q2, W의 [[DASH]]을 끊을 수 있음. \n 단, 리신 W의 [[SHIELD]]도 없음.",
        "E의 [[CAST_COMMIT]]으로 리신 R의 [[KNOCKBACK]], [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 리신 R의 [[KNOCKBACK]], [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 리신 Q2, W의 [[DASH]]을 따라갈 수 있음. \n 단, 리신과 충돌하면 [[HOMING]] 종료."],
      en: ["Q [[STUN]] cannot interrupt Lee Sin's Q2 or W [[DASH]]. \n However, the [[STUN]] still applies.",
        "E [[KNOCKBACK]] and R [[FEAR]] can interrupt Lee Sin's Q2 or W [[DASH]]. \n However, Lee Sin's W [[SHIELD]] is also negated.",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Lee Sin's R [[KNOCKBACK]] or [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Lee Sin's R [[KNOCKBACK]] and [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Lee Sin's Q2 or W [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Lee Sin."],
    },
    leesin: {
      ko: [],
      en: [],
    },
  },
};
