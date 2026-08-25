// app/data/matchups/camille/camille_viego.ts
import type { MatchupSummary } from "../_types";

export const camille_viego: MatchupSummary = {
  champs: ["camille", "viego"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 비에고 W의 [[STUN]], R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 비에고 W의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 비에고 W의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 비에고 P, Q, W, R을 피할 수 있음. \n 단, 비에고 P의 강화 평타를 피할 수 있는 것으로 보여지는데 (정확히는 공격 취소). \n 대부분의 평타 강화 또는 대상에게 걸린 [[DEBUFF_STACK]]을 소모하여 데미지를 주는 평타들은 \n 피할 수 없는 것으로 관측해 왔는데. 비에고 P는 예외라 이상함. \n 관측되면 제보 부탁드림."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Viego's W [[STUN]] and R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Viego's W [[SKILL_CHARGED]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Viego's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Viego's P, Q, W, and R. \n However, Camille appears to be able to dodge Viego's P empowered auto-attack (more precisely, the attack gets canceled). \n Most empowered auto-attacks, or auto-attacks that deal damage by consuming a [[DEBUFF_STACK]] on the target, \n have been observed as undodgeable, so Viego's P being an exception is unusual. \n Please report it if you observe this."
      ],
    },
    viego: {
      ko: ["W의 [[STUN]], R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Viego's W [[STUN]] and R [[KNOCKBACK]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
