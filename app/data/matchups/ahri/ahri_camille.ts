// app/data/matchups/ahri/ahri_camille.ts
import type { MatchupSummary } from "../_types";

export const ahri_camille: MatchupSummary = {
  champs: ["ahri", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 아리 E의 [[CHARM]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[CHARM]]이 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아리 R의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 아리 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Ahri's E [[CHARM]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[CHARM]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Ahri's R [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ahri's auto-attacks, Q, W, E, and R."
      ],
    },
  },
};
