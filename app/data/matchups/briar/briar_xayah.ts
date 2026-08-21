// app/data/matchups/briar/briar_xayah.ts
import type { MatchupSummary } from "../_types";

export const briar_xayah: MatchupSummary = {
  champs: ["briar", "xayah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 자야 E의 [[ROOT]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 자야 E의 [[ROOT]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 자야 R의 [[UNTARGETABLE]]을 따라갈 수 있음. \n 단, 자야와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Xayah's E [[ROOT]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Xayah's E [[ROOT]].",
        "R2 [[HOMING]] [[DASH]] can follow Xayah's R [[UNTARGETABLE]]. \n However, the [[HOMING]] ends upon colliding with Xayah."],
    },
    xayah: {
      ko: [],
      en: [],
    },
  },
};
