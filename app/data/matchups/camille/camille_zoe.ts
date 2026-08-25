// app/data/matchups/camille/camille_zoe.ts
import type { MatchupSummary } from "../_types";

export const camille_zoe: MatchupSummary = {
  champs: ["camille", "zoe"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 조이 E의 [[SLEEP]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[SLEEP]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 조이 평타, Q, W, E([[PROJECTILE]], [[ZONE]], [[SLEEP]])를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 조이 P의 [[EMPOWERED]] 평타를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/7Vr5iQPloqY]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Zoe's E [[SLEEP]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[SLEEP]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] and [[UNSTOPPABLE]] can dodge Zoe's auto-attacks, Q, W, and E ([[PROJECTILE]], [[ZONE]], [[SLEEP]]).",
        "Camille's R [[UNTARGETABLE]] cannot dodge Zoe's P [[EMPOWERED]] auto-attack. [[CLIP:https://www.youtube.com/shorts/7Vr5iQPloqY]]"
      ],
    },
    zoe: {
      ko: ["E의 [[SLEEP]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[SLEEP]]은 남아있음."],
      en: ["Zoe's E [[SLEEP]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[SLEEP]] still applies."],
    },
  },
};
