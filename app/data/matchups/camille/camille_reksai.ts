// app/data/matchups/camille/camille_reksai.ts
import type { MatchupSummary } from "../_types";

export const camille_reksai: MatchupSummary = {
  champs: ["camille", "reksai"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 렉사이 매복폼 W의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 렉사이 W의 매복폼 [[TRANSFORM]]을 해제시킬 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 렉사이 매복폼 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 렉사이 돌출폼 Q(범위 피해), E, R / 매복폼 Q, W(범위 피해)를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Rek'Sai's Burrowed W [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can cancel Rek'Sai's W Burrow [[TRANSFORM]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Rek'Sai's Burrowed E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Rek'Sai's Unburrowed Q (AoE damage), E, and R / Burrowed Q and W (AoE damage)."
      ],
    },
    reksai: {
      ko: ["매복폼 W의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Rek'Sai's Burrowed W [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
