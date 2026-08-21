// app/data/matchups/briar/briar_vex.ts
import type { MatchupSummary } from "../_types";

export const briar_vex: MatchupSummary = {
  champs: ["briar", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 벡스 P의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 벡스 P의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 벡스 R2의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 벡스와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Vex's P [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Vex's P [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Vex's R2 [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Vex."],
    },
    vex: {
      ko: [],
      en: [],
    },
  },
};
