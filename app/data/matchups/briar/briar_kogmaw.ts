// app/data/matchups/briar/briar_kogmaw.ts
import type { MatchupSummary } from "../_types";

export const briar_kogmaw: MatchupSummary = {
  champs: ["briar", "kogmaw"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["E의 [[KNOCKBACK]]으로 코그모 P의 살아있는 폭탄을 [[KNOCKBACK]] 할 수 없음.", 
        "R의 [[PROJECTILE]]를 코그모에게 맞혀 브라이어가 R2를 준비할 때 \n 코그모가 처치되어 P의 살아있는 폭탄이 되면 \n 브라이어가 R의 [[HOMING]] [[DASH]]으로 살아있는 폭탄을 따라감."],
      en: ["Briar's E [[KNOCKBACK]] cannot knock back Kog'Maw's P (living bomb).",
        "If Briar's R [[PROJECTILE]] hits Kog'Maw while Briar is preparing R2, \n and Kog'Maw dies and becomes a living bomb via P, \n Briar's R [[HOMING]] [[DASH]] follows the living bomb."],
    },
    kogmaw: {
      ko: ["P의 살아있는 폭탄을 브라이어 E의 [[KNOCKBACK]]으로 밀어낼 수 없음."],
      en: ["Kog'Maw's P (living bomb) cannot be pushed by Briar's E [[KNOCKBACK]]."],
    },
  },
};
