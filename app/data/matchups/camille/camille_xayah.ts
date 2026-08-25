// app/data/matchups/camille/camille_xayah.ts
import type { MatchupSummary } from "../_types";

export const camille_xayah: MatchupSummary = {
  champs: ["camille", "xayah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 자야 E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 자야 평타, Q, W([[PROJECTILE]]), E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Xayah's E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Xayah's auto-attacks, Q, W ([[PROJECTILE]]), E, and R."
      ],
    },
    xayah: {
      ko: ["E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Xayah's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
