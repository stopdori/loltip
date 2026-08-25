// app/data/matchups/braum/braum_camille.ts
import type { MatchupSummary } from "../_types";

export const braum_camille: MatchupSummary = {
  champs: ["braum", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    braum: {
      ko: ["브라움 E(방패)로 카밀 평타, Q1, Q2, W, E, R을 막을([[DAMAGE_NULLIFY]]) 수 있음. 단, E(방패)의 [[STUN]]은 남아있음.", 
        "브라움 P의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. 단, [[STUN]]은 남아있음", 
        "브라움 R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Braum's E (shield) can block ([[DAMAGE_NULLIFY]]) Camille's auto-attacks, Q1, Q2, W, E, and R. However, E (shield)'s [[STUN]] still applies.",
        "Braum's P [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. However, the [[STUN]] still applies.",
        "Braum's R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 브라움 P의 [[STUN]], R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 브라움 W의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 브라움 Q, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Braum's P [[STUN]] and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Braum's W [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Braum's Q and R."
      ],
    },
  },
};
