// app/data/matchups/belveth/belveth_camille.ts
import type { MatchupSummary } from "../_types";

export const belveth_camille: MatchupSummary = {
  champs: ["belveth", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["W의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 카밀 E의 [[STUN]] / R의 [[SILENCE]], [[KNOCKBACK]]으로 끊기지 않음. \n 단, [[STUN]], [[SILENCE]], [[KNOCKBACK]]은 남아있음."],
      en: ["Bel'Veth's W [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Bel'Veth's R activates instantly and has [[TIMING_AFTERCAST]], so it cannot be interrupted by Camille's E [[STUN]] / R [[SILENCE]], [[KNOCKBACK]]. \n However, the [[STUN]], [[SILENCE]], and [[KNOCKBACK]] still apply."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 벨베스 W의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 벨베스 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 벨베스 Q, W, E, R(범위 피해)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Bel'Veth's W [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Bel'Veth's E [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Bel'Veth's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Bel'Veth's Q, W, E, and R (AoE damage)."
      ],
    },
  },
};
