// app/data/matchups/camille/camille_rell.ts
import type { MatchupSummary } from "../_types";

export const camille_rell: MatchupSummary = {
  champs: ["camille", "rell"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 렐 Q의 [[STUN]] / 승마폼 W의 [[AIRBORNE]] / 낙마폼 E [[BA]]의 [[GRAB]] / R의 [[GRAB]]을 무시하고 \n E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 렐 승마폼 W, 낙마폼 W 평타의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 렐 Q, W(승마폼, 낙마폼), R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Rell's Q [[STUN]] / Mounted form W [[AIRBORNE]] / Dismounted form E [[BA]] [[GRAB]] / R [[GRAB]] and \n continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Rell's Mounted form W and Dismounted form W auto-attack [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Rell's Q, W (Mounted form, Dismounted form), and R."
      ],
    },
    rell: {
      ko: ["렐 Q의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "승마폼 W의 [[AIRBORNE]] / 낙마폼 E [[BA]]의 [[GRAB]] / R의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Rell's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Rell's Mounted form W [[AIRBORNE]] / Dismounted form E [[BA]] [[GRAB]] / R [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
