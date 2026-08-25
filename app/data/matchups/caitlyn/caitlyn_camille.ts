// app/data/matchups/caitlyn/caitlyn_camille.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_camille: MatchupSummary = {
  champs: ["caitlyn", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W ([[TRAP]]) [[ROOT]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 케이틀린 활성화된 W([[TRAP]])의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 케이틀린 E의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 케이틀린 평타, P(헤드샷), Q, W(덫, 헤드샷), E(투망, 헤드샷), R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Caitlyn's activated W ([[TRAP]]) [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Caitlyn's R [[SKILL_CHANNEL]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Caitlyn's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Caitlyn's auto-attacks, P (headshot), Q, W (trap, headshot), E (net, headshot), and R."
      ],
    },
  },
};
