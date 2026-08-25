// app/data/matchups/alistar/alistar_camille.ts
import type { MatchupSummary } from "../_types";

export const alistar_camille: MatchupSummary = {
  champs: ["alistar", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["Q의 [[AIRBORNE]], W의 [[KNOCKBACK]] 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "R의 [[CC_CLEANSE]]로 카밀 W의 [[SLOW]], E의 [[STUN]], R의 [[KNOCKBACK]]을 해제할 수 있음."],
      en: ["Alistar's Q [[AIRBORNE]] and W [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Alistar's E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Alistar's R [[CC_CLEANSE]] can remove Camille's W [[SLOW]], E [[STUN]], and R [[KNOCKBACK]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 알리스타 Q의 [[AIRBORNE]], W의 [[KNOCKBACK]], E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 알리스타 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 알리스타 Q, W, E(범위 피해)를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Alistar's Q [[AIRBORNE]], W [[KNOCKBACK]], and E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Alistar's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Alistar's Q, W, and E (AoE damage)."
      ],
    },
  },
};
