// app/data/matchups/camille/camille_zaahen.ts
import type { MatchupSummary } from "../_types";

export const camille_zaahen: MatchupSummary = {
  champs: ["camille", "zaahen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 자헨 Q2의 [[AIRBORNE]] / W의 [[GRAB]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 자헨 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 자헨 Q2, W, E, R을 피할 수 있음. \n 단, 자헨 Q2를 카밀에게 사용했을 때 모션은 발동하지만 적용되지 않음. \n 자헨이 다른 대상에게 Q2를 사용할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Zaahen's Q2 [[AIRBORNE]] / W [[GRAB]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Zaahen's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Zaahen's Q2, W, E, and R. \n However, if Zaahen uses Q2 on Camille, the animation plays but it does not apply. \n Zaahen can use Q2 on another target instead."
      ],
    },
    zaahen: {
      ko: ["자헨 Q2의 [[AIRBORNE]] / W의 [[GRAB]], [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Zaahen's Q2 [[AIRBORNE]] / W [[GRAB]], [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
