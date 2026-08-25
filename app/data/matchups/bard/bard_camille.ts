// app/data/matchups/bard/bard_camille.ts
import type { MatchupSummary } from "../_types";

export const bard_camille: MatchupSummary = {
  champs: ["bard", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["Q의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음 \n 단, [[STUN]]은 남아있음.", 
        "R(존야)의 [[STASIS]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Bard's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]] \n However, the [[STUN]] still applies.",
        "Bard's R (like Zhonya's Hourglass) [[STASIS]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["[[TIP]]E1( 투척 단계 )의 [[CC_BUFFER]]로 바드 R(존야)의 [[STASIS]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 없음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 바드 E(벽이동)의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]], [[UNSTOPPABLE]]로 바드 평타, Q, R을 피할 수 있음. [[CLIP:]]",
      ],
      en: ["[[TIP]]Camille's E1 (Throw phase) [[CC_BUFFER]] cannot ignore Bard's R (like Zhonya's Hourglass) [[STASIS]] to continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Bard's E (wall traversal) [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] and [[UNSTOPPABLE]] can dodge Bard's auto-attacks, Q, and R. [[CLIP:]]"
      ],
    },
  },
};
