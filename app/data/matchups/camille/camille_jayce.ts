// app/data/matchups/camille/camille_jayce.ts
import type { MatchupSummary } from "../_types";

export const camille_jayce: MatchupSummary = {
  champs: ["camille", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 제이스 해머폼 E의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 제이스 캐논폼 평타, Q, W(평타) / 해머폼 Q, W, E를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Jayce's Hammer Form E [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Jayce's Hammer Form Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Jayce's Cannon Form basic attacks, Q, W (basic attack) / Hammer Form Q, W, and E."
      ],
    },
    jayce: {
      ko: ["해머폼 E의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Jayce's Hammer Form E [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
