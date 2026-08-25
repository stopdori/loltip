// app/data/matchups/camille/camille_vex.ts
import type { MatchupSummary } from "../_types";

export const camille_vex: MatchupSummary = {
  champs: ["camille", "vex"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 벡스 P의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "R의 [[UNTARGETABLE]]로 벡스 평타, Q, W, E, R1, R2를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 벡스 P(평타)가 취소될 수 있지만 발동하면 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/B2jPM1vCb5I]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Vex's P [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Vex's auto-attacks, Q, W, E, R1, and R2.",
        "Camille's R [[UNTARGETABLE]] can cause Vex's P (auto-attack) to be canceled, but if it already triggered, it cannot be dodged. [[CLIP:https://www.youtube.com/shorts/B2jPM1vCb5I]]"
      ],
    },
    vex: {
      ko: ["P의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Vex's P [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
