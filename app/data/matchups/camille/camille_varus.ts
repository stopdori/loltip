// app/data/matchups/camille/camille_varus.ts
import type { MatchupSummary } from "../_types";

export const camille_varus: MatchupSummary = {
  champs: ["camille", "varus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 바루스 R의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 바루스 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "[[TIP]]R의 [[UNTARGETABLE]]로 바루스 평타, Q, E, R([[PROJECTILE]], [[CHAIN]])을 피할 수 있음. \n 단, R의 [[CHAIN]]는 [[UNTARGETABLE]] [[UNSTOPPABLE]]상태가 되어도 [[CHAIN]] 대상에서 제외되지 않음. \n 단, R의 [[CHAIN]]가 발동하는 타이밍에 [[UNTARGETABLE]] [[UNSTOPPABLE]]로 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Varus's R [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Varus's Q [[SKILL_CHARGED]].",
        "[[TIP]]Camille's R [[UNTARGETABLE]] can dodge Varus's auto-attacks, Q, E, and R ([[PROJECTILE]], [[CHAIN]]). \n However, becoming [[UNTARGETABLE]] [[UNSTOPPABLE]] does not exclude Camille from R's [[CHAIN]] target list. \n However, if [[UNTARGETABLE]] [[UNSTOPPABLE]] is active exactly when R's [[CHAIN]] triggers, it can be dodged."
      ],
    },
    varus: {
      ko: ["R의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Varus's R [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
