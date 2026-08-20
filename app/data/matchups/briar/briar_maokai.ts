// app/data/matchups/briar/briar_maokai.ts
import type { MatchupSummary } from "../_types";

export const briar_maokai: MatchupSummary = {
  champs: ["briar", "maokai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 마오카이 Q의 [[KNOCKBACK]] / W, R의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 마오카이 Q의 [[KNOCKBACK]] / W, R의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 마오카이 W의 [[UNTARGETABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 마오카이와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even if hit by Maokai's Q [[KNOCKBACK]] or W and R [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Maokai's Q [[KNOCKBACK]] and W and R [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Maokai's W [[UNTARGETABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Maokai."],
    },
    maokai: {
      ko: [],
      en: [],
    },
  },
};
