// app/data/matchups/camille/camille_rakan.ts
import type { MatchupSummary } from "../_types";

export const camille_rakan: MatchupSummary = {
  champs: ["camille", "rakan"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 라칸 W의 [[AIRBORNE]], R의 [[CHARM]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[CHARM]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 라칸 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 라칸 평타, Q, W, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Rakan's W [[AIRBORNE]] and R [[CHARM]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[CHARM]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Rakan's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Rakan's auto-attacks, Q, W, and R."
      ],
    },
    rakan: {
      ko: ["W의 [[AIRBORNE]], R의 [[CHARM]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Rakan's W [[AIRBORNE]] and R [[CHARM]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
