// app/data/matchups/camille/camille_yasuo.ts
import type { MatchupSummary } from "../_types";

export const camille_yasuo: MatchupSummary = {
  champs: ["camille", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 야스오 Q3, EQ3, R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 야스오 E의 [[SKILL_CHANNEL]] [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 야스오 Q, Q3, E를 피할 수 있음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Yasuo's Q3, EQ3, and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Yasuo's E [[SKILL_CHANNEL]] [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Yasuo's Q, Q3 and E."
      ],
    },
    yasuo: {
      ko: ["Q3, EQ3의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "W의 [[WINDSHIELD]]으로 카밀 E의 [[PROJECTILE]](갈고리)를 막을 수 있음.",
      ],
      en: ["Yasuo's Q3 and EQ3 [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Yasuo's W [[WINDSHIELD]] can block Camille's E [[PROJECTILE]] (grapple hook)."
      ],
    },
  },
};
