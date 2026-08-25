// app/data/matchups/camille/camille_nilah.ts
import type { MatchupSummary } from "../_types";

export const camille_nilah: MatchupSummary = {
  champs: ["camille", "nilah"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 닐라 R의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 닐라 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 닐라 평타, 평타(Q 강화), Q, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Nilah's R [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Nilah's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Nilah's auto-attacks, empowered auto-attack (Q), Q, E, and R."
      ],
    },
    nilah: {
      ko: ["R의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Nilah's R [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
