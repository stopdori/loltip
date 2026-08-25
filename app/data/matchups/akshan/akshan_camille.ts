// app/data/matchups/akshan/akshan_camille.ts
import type { MatchupSummary } from "../_types";

export const akshan_camille: MatchupSummary = {
  champs: ["akshan", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akshan: {
      ko: [""],
      en: [""],
    },
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 아크샨 E의 [[SKILL_CHANNEL]] [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 아크샨 평타, Q, E, R(시전 취소, [[PROJECTILE]])을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Akshan's E [[SKILL_CHANNEL]] [[DASH]] and R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Akshan's auto-attacks, Q, E, and R (cast cancellation, [[PROJECTILE]])."],
    },
  },
};
