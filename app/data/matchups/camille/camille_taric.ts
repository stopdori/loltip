// app/data/matchups/camille/camille_taric.ts
import type { MatchupSummary } from "../_types";

export const camille_taric: MatchupSummary = {
  champs: ["camille", "taric"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 타릭 E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 타릭 E, R(같은 편 일 때)을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Taric's E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Taric's E and R (when allied)."
      ],
    },
    taric: {
      ko: ["E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Taric's E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
  common: {
    ko: ["[[TIP]]카밀과 타릭이 같은편 일 때 \n 카밀 R의 [[UNTARGETABLE]]와 타릭 R의 [[INVULNERABLE]]은 조건에 따라 다름. \n \n 1. 타릭 R의 [[INVULNERABLE]]이 발동될 때 \n 카밀 R의 [[UNTARGETABLE]]가 발동하면 [[INVULNERABLE]]을 받지 않음. \n 2. 타릭 W를 카밀에게 연결하고 타릭 R의 [[INVULNERABLE]]이 발동될 때 \n 카밀 R의 [[UNTARGETABLE]]가 발동하면 [[INVULNERABLE]]을 받음. [[CLIP:https://www.youtube.com/shorts/OhuAsbHP00o]]"],
    en: ["[[TIP]]When Camille and Taric are on the same team \n Whether Camille's R [[UNTARGETABLE]] and Taric's R [[INVULNERABLE]] combine depends on the condition. \n \n 1. When Taric's R [[INVULNERABLE]] triggers \n and Camille's R [[UNTARGETABLE]] triggers at the same time, she does not receive [[INVULNERABLE]]. \n 2. When Taric links W to Camille first, and Taric's R [[INVULNERABLE]] triggers \n while Camille's R [[UNTARGETABLE]] is active, she does receive [[INVULNERABLE]]. [[CLIP:https://www.youtube.com/shorts/OhuAsbHP00o]]"],
  },
};
