// app/data/matchups/camille/camille_yorick.ts
import type { MatchupSummary } from "../_types";

export const camille_yorick: MatchupSummary = {
  champs: ["camille", "yorick"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 요릭 W([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 요릭 Q, W, E, R을 피할 수 있음. \n 단, 요릭 Q(평타)를 카밀에게 사용했을 때 모션은 발동하지만 적용되지 않음. \n 요릭이 다른 대상에게 Q(평타)를 사용할 수 있음.",
        "R의 [[UNTARGETABLE]]로 요릭 P(구울 공격), R(마녀 공격)을 피할 수 없음. \n 정말 어렵게 관측 성공. [[CLIP:https://www.youtube.com/shorts/J7FjNdx6byU]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Yorick's W ([[TERRAIN]]) [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Yorick's Q, W, E, and R. \n However, if Yorick uses Q (auto-attack) on Camille, the animation plays but it does not apply. \n Yorick can use Q (auto-attack) on another target instead.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Yorick's P (Ghoul attack) and R (Maiden attack). \n This was really difficult to observe successfully. [[CLIP:https://www.youtube.com/shorts/J7FjNdx6byU]]"
      ],
    },
    yorick: {
      ko: ["W([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Yorick's W ([[TERRAIN]]) [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
