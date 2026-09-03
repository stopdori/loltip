// app/data/matchups/briar/briar_malphite.ts
import type { MatchupSummary } from "../_types";

export const briar_malphite: MatchupSummary = {
  champs: ["briar", "malphite"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 말파이트 R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 말파이트 R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 말파이트 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 말파이트와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Malphite's R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Malphite's R [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Malphite's R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Malphite."],
    },
    malphite: {
      ko: ["R의 [[UNSTOPPABLE]]로 브라이어 Q의 [[STUN]], E의 [[KNOCKBACK]], R2의 [[FEAR]]를 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[STUN]], [[FEAR]]는 남아있음."],
      en: ["R [[UNSTOPPABLE]] can ignore Briar's Q [[STUN]], E [[KNOCKBACK]] and R2 [[FEAR]]. \n However, [[STUN]] and [[FEAR]] remain after [[UNSTOPPABLE]] ends."],
    },
  },
};
