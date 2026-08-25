// app/data/matchups/camille/camille_velkoz.ts
import type { MatchupSummary } from "../_types";

export const camille_velkoz: MatchupSummary = {
  champs: ["camille", "velkoz"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 벨코즈 E의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 벨코즈 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 벨코즈 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Vel'Koz's E [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Vel'Koz's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Vel'Koz's auto-attacks, Q, W, E, and R."
      ],
    },
    velkoz: {
      ko: ["E의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Vel'Koz's E [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
