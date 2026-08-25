// app/data/matchups/camille/camille_morgana.ts
import type { MatchupSummary } from "../_types";

export const camille_morgana: MatchupSummary = {
  champs: ["camille", "morgana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 모르가나 Q의 [[ROOT]], R의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]], [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 모르가나 평타, Q, W, R을 피할 수 있음. \n 단, R에 맞으면 발동하는 [[TETHER]] 효과를 피할 수 없음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Morgana's Q [[ROOT]] and R [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] or [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Morgana's auto-attacks, Q, W, and R. \n However, if hit by R, the triggered [[TETHER]] effect cannot be dodged."
      ],
    },
    morgana: {
      ko: ["Q의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음.",
        "R의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Morgana's Q [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]].",
        "Morgana's R [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
