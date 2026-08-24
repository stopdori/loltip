// app/data/matchups/camille/camille_hecarim.ts
import type { MatchupSummary } from "../_types";

export const camille_hecarim: MatchupSummary = {
  champs: ["camille", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 헤카림 E의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 헤카림 E의 [[KNOCKBACK]], R의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
        "R의 [[UNTARGETABLE]]로 헤카림 Q, W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Hecarim's E [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Hecarim's E [[KNOCKBACK]] and R [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Hecarim's Q, W, E, and R."
      ],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Hecarim's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
