// app/data/matchups/camille/camille_smolder.ts
import type { MatchupSummary } from "../_types";

export const camille_smolder: MatchupSummary = {
  champs: ["camille", "smolder"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 있음. [[EXIST]]", 
        "R의 [[DISRUPT]]로 스몰더 E의 [[IGNORE_TERRAIN]]를 끊을 수 없음. [[NOT_EXIST]]", 
        "R의 [[UNTARGETABLE]]로 스몰더 평타, Q, W, E([[PROJECTILE]]), R을 피할 수 있음. [[EXIST]]"],

      en: ["E [[KNOCKBACK]] and [[STUN]] can interrupt Smolder's E [[IGNORE_TERRAIN]]. [[EXIST]]", 
        "R [[DISRUPT]] cannot interrupt Smolder's E [[IGNORE_TERRAIN]]. [[NOT_EXIST]]", 
        "R [[UNTARGETABLE]] can dodge Smolder's basic attacks, Q, W, E ([[PROJECTILE]]), and R. [[EXIST]]"],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
