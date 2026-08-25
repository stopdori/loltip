// app/data/matchups/camille/camille_ziggs.ts
import type { MatchupSummary } from "../_types";

export const camille_ziggs: MatchupSummary = {
  champs: ["camille", "ziggs"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 직스 W의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 직스 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 직스 평타, Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Ziggs's W [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Ziggs's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ziggs's auto-attacks, Q, W, E, and R."
      ],
    },
    ziggs: {
      ko: ["W의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Ziggs's W [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
