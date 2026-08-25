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
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 스몰더 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 스몰더 평타, Q, W, E([[PROJECTILE]]), R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Smolder's E [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Smolder's auto-attacks, Q, W, E ([[PROJECTILE]]), and R."],
    },
    smolder: {
      ko: [],
      en: [],
    },
  },
};
