// app/data/matchups/camille/camille_kayn.ts
import type { MatchupSummary } from "../_types";

export const camille_kayn: MatchupSummary = {
  champs: ["camille", "kayn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 케인 / 그암 / 다르킨 Q, E의 [[DASH]]을 끊을 수 있음.", 
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 다르킨 W의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 케인 / 그암 / 다르킨 Q, W를 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 케인 / 그암 / 다르킨 R을 피할 수 없음. \n 단, [[UNTARGETABLE]] 상태일 때는 케인이 시전 불가."
      ],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Kayn's Base, Shadow, and Rhaast forms' Q and E [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Kayn's Rhaast form W [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Kayn's Base, Shadow, and Rhaast forms' Q and W.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Kayn's Base, Shadow, and Rhaast forms' R. \n However, Kayn cannot cast it while Camille is [[UNTARGETABLE]]."
      ],
    },
    kayn: {
      ko: ["다르킨 W의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Kayn's Rhaast form W [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
