// app/data/matchups/camille/camille_garen.ts
import type { MatchupSummary } from "../_types";

export const camille_garen: MatchupSummary = {
  champs: ["camille", "garen"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 가렌 Q의 [[SILENCE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 가렌 E를 피할 수 있음. \n 단, 가렌 R은 취소될 수 있음. [[COOLDOWN]] 소모 없음. \n 단, 가렌 Q는 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/Vo3dIguHRa4]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Garen's Q [[SILENCE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Garen's E. \n However, Garen's R can be cancelled, with no [[COOLDOWN]] consumed. \n However, Garen's Q cannot be dodged. [[CLIP:https://www.youtube.com/shorts/Vo3dIguHRa4]]"
      ],
    },
    garen: {
      ko: ["Q의 [[SILENCE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Garen's Q [[SILENCE]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
  },
};
