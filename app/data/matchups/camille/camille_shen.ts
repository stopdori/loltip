// app/data/matchups/camille/camille_shen.ts
import type { MatchupSummary } from "../_types";

export const camille_shen: MatchupSummary = {
  champs: ["camille", "shen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 쉔 E의 [[TAUNT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[TAUNT]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 쉔 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 쉔 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 쉔 Q(검 이동), E를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Shen's E [[TAUNT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[TAUNT]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Shen's R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Shen's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Shen's Q (sword movement) and E."
      ],
    },
    shen: {
      ko: ["E의 [[TAUNT]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Shen's E [[TAUNT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
