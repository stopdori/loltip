// app/data/matchups/briar/briar_rammus.ts
import type { MatchupSummary } from "../_types";

export const briar_rammus: MatchupSummary = {
  champs: ["briar", "rammus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], R의 [[AIRBORNE]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 람머스 Q의 [[KNOCKBACK]], E의 [[TAUNT]], R의 [[AIRBORNE]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 람머스 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 람머스와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Rammus's Q [[KNOCKBACK]], E [[TAUNT]], and R [[AIRBORNE]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Rammus's Q [[KNOCKBACK]], E [[TAUNT]], and R [[AIRBORNE]].",
        "R2 [[HOMING]] [[DASH]] can follow Rammus's R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Rammus."],
    },
    rammus: {
      ko: [],
      en: [],
    },
  },
};
