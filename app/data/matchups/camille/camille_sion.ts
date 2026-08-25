// app/data/matchups/camille/camille_sion.ts
import type { MatchupSummary } from "../_types";

export const camille_sion: MatchupSummary = {
  champs: ["camille", "sion"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 사이온 Q, R의 [[AIRBORNE]], [[SUTN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 사이온 Q의 [[SKILL_CHARGED]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 사이온 Q, W(폭발 피해), E, R을 피할 수 있음. \n 단, 카밀 R을 사이온 R([[DASH]] 중인)에 사용하면 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Sion's Q and R [[AIRBORNE]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Sion's Q [[SKILL_CHARGED]].",
        "Camille's R [[UNTARGETABLE]] can dodge Sion's Q, W (explosion damage), E, and R. \n However, if Camille uses R while Sion's R is already [[DASH]]ing, it cannot be dodged."
      ],
    },
    sion: {
      ko: ["Q, R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Sion's Q and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
