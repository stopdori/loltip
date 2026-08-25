// app/data/matchups/anivia/anivia_camille.ts
import type { MatchupSummary } from "../_types";

export const anivia_camille: MatchupSummary = {
  champs: ["anivia", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    anivia: {
      ko: ["Q의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음. \n 단, [[STUN]]은 남아있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.", 
        "W([[TERRAIN]])의 [[AIRBORNE]]으로 카밀 W를 시전 중일 때 뒤로 밀어내면 W의 [[AOE]]도 같이 뒤로 밀림."],
      en: ["Anivia's Q [[STUN]] can interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Anivia's W ([[TERRAIN]]) [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]].",
        "If Anivia's W ([[TERRAIN]]) [[AIRBORNE]] knocks Camille back while she is casting W, Camille's W [[AOE]] gets pushed back along with her."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 애니비아 Q의 [[STUN]], W([[TERRAIN]])의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 애니비아 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 애니비아 평타, Q, W([[TERRAIN]] 생성의 [[AIRBORNE]]), E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Anivia's Q [[STUN]] and W ([[TERRAIN]]) [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Anivia's R [[SKILL_CHANNEL]].",
        "Camille's R [[UNTARGETABLE]] can dodge Anivia's auto-attacks, Q, W (the [[AIRBORNE]] from [[TERRAIN]] creation), E, and R."
      ],
    },
  },
};
