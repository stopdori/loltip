// app/data/matchups/camille/camille_pyke.ts
import type { MatchupSummary } from "../_types";

export const camille_pyke: MatchupSummary = {
  champs: ["camille", "pyke"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 파이크 Q의 [[GRAB]], E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 파이크 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 파이크 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 파이크 Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Pyke's Q [[GRAB]] and E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Pyke's Q [[SKILL_CHARGED]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Pyke's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Pyke's Q, E, and R."
      ],
    },
    pyke: {
      ko: ["Q의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Pyke's Q [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Pyke's E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
