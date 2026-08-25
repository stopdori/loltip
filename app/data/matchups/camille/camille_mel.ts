// app/data/matchups/camille/camille_mel.ts
import type { MatchupSummary } from "../_types";

export const camille_mel: MatchupSummary = {
  champs: ["camille", "mel"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 멜 E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 멜 평타, Q, W(반사된 투사체류), E, R을 피할 수 있음. R만 영상.[[CLIP:https://www.youtube.com/shorts/Ltf4fktTP3I]]"],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Mel's E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Mel's auto-attacks, Q, W (reflected projectile-type skills), E, and R. Clip shows R only.[[CLIP:https://www.youtube.com/shorts/Ltf4fktTP3I]]"],
    },
    mel: {
      ko: ["[[TIP]]W의 [[REFLECT]]로 카밀 E의 [[PROJECTILE]](갈고리 투척)를 막을 수 있음. \n 단, 반사는 불가능. [[CLIP:https://www.youtube.com/shorts/EH5rpn117ZY]]",
        "E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["[[TIP]]Mel's W [[REFLECT]] can block Camille's E [[PROJECTILE]] (grapple throw). \n However, reflecting it is not possible. [[CLIP:https://www.youtube.com/shorts/EH5rpn117ZY]]",
        "Mel's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
