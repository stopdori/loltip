// app/data/matchups/camille/camille_gnar.ts
import type { MatchupSummary } from "../_types";

export const camille_gnar: MatchupSummary = {
  champs: ["camille", "gnar"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 나르 미니폼 / 메가폼 E의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 나르 메가폼 W의 [[STUN]] / R의 [[KNOCKBACK]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "R의 [[UNTARGETABLE]]로 나르 미니폼 평타, Q / 메가폼 Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Gnar's Mini Form / Mega Form E [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Gnar's Mega Form W [[STUN]] / R [[KNOCKBACK]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Gnar's Mini Form basic attacks, Q / Mega Form Q, W, E, and R."
      ],
    },
    gnar: {
      ko: ["메가폼 W의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "메가폼 R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Gnar's Mega Form W [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Gnar's Mega Form R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
