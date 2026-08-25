// app/data/matchups/camille/camille_quinn.ts
import type { MatchupSummary } from "../_types";

export const camille_quinn: MatchupSummary = {
  champs: ["camille", "quinn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 퀸 E의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 퀸 R의 발러폼 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 퀸 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 퀸 평타, Q, E, R(범위 피해)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Quinn's E [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can cancel Quinn's R Valor form [[TRANSFORM]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Quinn's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Quinn's auto-attacks, Q, E, and R (AoE damage)."
      ],
    },
    quinn: {
      ko: ["E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Quinn's E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
