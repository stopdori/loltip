// app/data/matchups/briar/briar_nocturne.ts
import type { MatchupSummary } from "../_types";

export const briar_nocturne: MatchupSummary = {
  champs: ["briar", "nocturne"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 녹턴 E의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 녹턴 E의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 녹턴 R2의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 녹턴과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Nocturne's E [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Nocturne's E [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Nocturne's R2 [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Nocturne."],
    },
    nocturne: {
      ko: ["녹턴 W의 [[SPELL_SHIELD]]로 브라이어 R1의 [[PROJECTILE]]를 완전히 무시할 수 있음."],
      en: ["Nocturne's W [[SPELL_SHIELD]] can completely ignore Briar's R1 [[PROJECTILE]]."],
    },
  },
};
