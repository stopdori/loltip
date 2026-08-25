// app/data/matchups/camille/camille_nunu.ts
import type { MatchupSummary } from "../_types";

export const camille_nunu: MatchupSummary = {
  champs: ["camille", "nunu"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 누누와 월럼프 W의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 누누와 월럼프 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 누누와 월럼프 Q, W, E, R을 피할 수 있음. \n 단, 누누와 월럼프 Q를 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Nunu & Willump's W [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Nunu & Willump's W and R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Nunu & Willump's Q, W, E, and R. \n However, it can be canceled if Nunu & Willump uses Q on Camille. No [[COOLDOWN]] is consumed."
      ],
    },
    nunu: {
      ko: ["W의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Nunu & Willump's W [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
