// app/data/matchups/briar/briar_fizz.ts
import type { MatchupSummary } from "../_types";

export const briar_fizz: MatchupSummary = {
  champs: ["briar", "fizz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 피즈 Q의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R2의 [[FEAR]]로 피즈 Q의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 피즈 R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.",
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 피즈 R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 피즈 Q의 [[DASH]]을 따라갈 수 있음. \n 단, 피즈와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Fizz's Q [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R2 [[FEAR]] can interrupt Fizz's Q [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Fizz's R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Fizz's R [[AIRBORNE]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Fizz's Q [[DASH]]. \n However, [[HOMING]] ends upon colliding with Fizz."],
    },
    fizz: {
      ko: [],
      en: [],
    },
  },
};
