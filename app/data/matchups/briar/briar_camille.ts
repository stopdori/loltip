// app/data/matchups/briar/briar_camille.ts
import type { MatchupSummary } from "../_types";

export const briar_camille: MatchupSummary = {
  champs: ["briar", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    briar: {
      ko: ["Q의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.", 
        "E의 [[KNOCKBACK]], R의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "E의 [[CAST_COMMIT]]으로 카밀 E의 [[AIRBORNE]], R의 [[SILENCE]], [[KNOCKBACK]]에 걸려도 시전을 유지할 수 있음.", 
        "R1의 [[CC_IMMUNE]], R2의 [[UNSTOPPABLE]]로 카밀 E의 [[AIRBORNE]] / R의 [[SILENCE]], [[KNOCKBACK]]을 무시할 수 있음.",
        "R2의 [[HOMING]] [[DASH]]으로 카밀 E1, E2의 [[DASH]], R의 [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]을 따라갈 수 있음. \n 단, 카밀과 충돌하면 [[HOMING]] 종료."],
      en: ["Briar's Q [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Briar's E [[KNOCKBACK]] and R [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Briar's E [[CAST_COMMIT]] allows her to keep casting even if hit by Camille's E [[AIRBORNE]] or R [[SILENCE]], [[KNOCKBACK]].",
        "Briar's R1 [[CC_IMMUNE]] and R2 [[UNSTOPPABLE]] can ignore Camille's E [[AIRBORNE]] / R [[SILENCE]], [[KNOCKBACK]].",
        "Briar's R2 [[HOMING]] [[DASH]] can follow Camille's E1, E2 [[DASH]] and R [[UNTARGETABLE]] [[UNSTOPPABLE]] [[DASH]]. \n However, the [[HOMING]] ends once she collides with Camille."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 브라이어 Q의 [[STUN]] / E의 [[KNOCKBACK]], [[STUN]] / R의 [[FEAR]]를 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 브라이어 Q, W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 브라이어 E, R1, R2를 피할 수 있음."

      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Briar's Q [[STUN]] / E [[KNOCKBACK]], [[STUN]] / R [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Briar's Q and W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Briar's E, R1, and R2."
      ],
    },
  },
};
