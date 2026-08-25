// app/data/matchups/camille/camille_sylas.ts
import type { MatchupSummary } from "../_types";

export const camille_sylas: MatchupSummary = {
  champs: ["camille", "sylas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 사일러스 E2의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 사일러스 W, E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 사일러스 평타(범위 피해), Q(타격 피해, 폭발 피해), W, E2, R(경우에 따라)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Sylas's E2 [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Sylas's W, E1, and E2 [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Sylas's auto-attacks (AoE damage), Q (impact damage, explosion damage), W, E2, and R (depending on the situation)."
      ],
    },
    sylas: {
      ko: ["E2의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Sylas's E2 [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
