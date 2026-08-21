// app/data/matchups/briar/briar_shyvana.ts
import type { MatchupSummary } from "../_types";

export const briar_shyvana: MatchupSummary = {
  champs: ["briar", "shyvana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[CAST_COMMIT]]으로 쉬바나 R의 [[FEAR]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 쉬바나 R의 [[FEAR]]를 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 쉬바나 R의 [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 쉬바나와 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's E [[CAST_COMMIT]] allows maintaining the cast even when caught by Shyvana's R [[FEAR]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Shyvana's R [[FEAR]].",
        "R2 [[HOMING]] [[DASH]] can follow Shyvana's R [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends upon colliding with Shyvana."],
    },
    shyvana: {
      ko: [],
      en: [],
    },
  },
};
