// app/data/matchups/camille/camille_shaco.ts
import type { MatchupSummary } from "../_types";

export const camille_shaco: MatchupSummary = {
  champs: ["camille", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 샤코 W, R의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "R의 [[UNTARGETABLE]]로 샤코 W(발동된 상태의 [[PROJECTILE]]), E, R(발동된 상태의 [[PROJECTILE]])을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Shaco's W and R [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Shaco's W (the triggered [[PROJECTILE]]), E, and R (the triggered [[PROJECTILE]])."
      ],
    },
    shaco: {
      ko: ["Q의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 Q의 [[BLINK]]을 할 수 있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 Q의 [[BLINK]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아올 수 있음.",
        "W, R의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Shaco's Q [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] and continue the Q [[BLINK]]. \n However, if the Q [[BLINK]] moves outside of Camille's R [[ZONE]] range, Shaco can be forcibly [[GRAB]]bed back into the [[ZONE]] [[AOE]].",
        "Shaco's W and R [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
