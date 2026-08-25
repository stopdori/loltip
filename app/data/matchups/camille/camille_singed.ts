// app/data/matchups/camille/camille_singed.ts
import type { MatchupSummary } from "../_types";

export const camille_singed: MatchupSummary = {
  champs: ["camille", "singed"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 신지드 W의 [[GROUNDED]] / E의 [[GRAB]], [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 신지드 Q, W, E을 피할 수 있음. \n 단, 신지드 E를 카밀에게 사용했을 때 취소될 수 있음. [[COOLDOWN]] 소모 없음.", 
        "R의 [[UNTARGETABLE]]로 신지드 Q의 지속 피해를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Singed's W [[GROUNDED]] / E [[GRAB]], [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Singed's Q, W, and E. \n However, it can be canceled if Singed uses E on Camille. No [[COOLDOWN]] is consumed.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Singed's Q damage-over-time."
      ],
    },
    singed: {
      ko: ["W의 [[GROUNDED]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음.",
        "E의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Singed's W [[GROUNDED]] cannot interrupt Camille's E1 and E2 [[DASH]].",
        "Singed's E [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
