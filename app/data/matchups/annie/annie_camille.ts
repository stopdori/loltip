// app/data/matchups/annie/annie_camille.ts
import type { MatchupSummary } from "../_types";

export const annie_camille: MatchupSummary = {
  champs: ["annie", "camille"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    annie: {
      ko: ["P의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Annie's P [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 애니 P의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "E, R의 [[KNOCKBACK]]으로 애니 R로 [[SUMMON]]된 티버를 [[KNOCKBACK]] 할 수 있음.",
        "R의 [[UNTARGETABLE]]로 애니 평타, Q, W, R을 피할 수 있음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Annie's P [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E and R [[KNOCKBACK]] can [[KNOCKBACK]] Tibbers, [[SUMMON]]ed by Annie's R.",
        "Camille's R [[UNTARGETABLE]] can dodge Annie's auto-attacks, Q, W, and R."],
    },
  },
};
