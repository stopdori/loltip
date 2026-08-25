// app/data/matchups/camille/camille_vi.ts
import type { MatchupSummary } from "../_types";

export const camille_vi: MatchupSummary = {
  champs: ["camille", "vi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 바이 Q, R의 [[KNOCKBACK]] / R 의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 바이 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 바이 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 바이 Q, W, E(범위 피해), R(시전 취소)을 피할 수 있음.", 
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Vi's Q and R [[KNOCKBACK]] / R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Vi's Q [[SKILL_CHARGED]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Vi's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Vi's Q, W, E (AoE damage), and R (cast cancellation)."
      ],
    },
    vi: {
      ko: ["Q, R의 [[KNOCKBACK]] / R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Vi's Q and R [[KNOCKBACK]] / R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["[[TIP]]카밀 R과 바이 R을 서로에게 사용하면 \n 카밀 R의 [[UNTARGETABLE]]로 바이 R이 해제되고 [[COOLDOWN]] 소모."],
    en: ["[[TIP]]If Camille and Vi use their R on each other, \n Camille's R [[UNTARGETABLE]] cancels Vi's R, and it still consumes its [[COOLDOWN]]."],
  },
};
