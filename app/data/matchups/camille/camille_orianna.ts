// app/data/matchups/camille/camille_orianna.ts
import type { MatchupSummary } from "../_types";

export const camille_orianna: MatchupSummary = {
  champs: ["camille", "orianna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 오리아나 R의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 오리아나 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Orianna's R [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Orianna's auto-attacks, Q, W, E, and R."
      ],
    },
    orianna: {
      ko: ["R의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Orianna's R [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
