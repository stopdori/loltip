// app/data/matchups/camille/camille_elise.ts
import type { MatchupSummary } from "../_types";

export const camille_elise: MatchupSummary = {
  champs: ["camille", "elise"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 엘리스 거미폼 Q의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 엘리스 거미폼 E의 [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[STUN]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
      "R의 [[UNTARGETABLE]]로 엘리스 인간폼 평타, Q, W, E / 거미폼 Q를 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Elise's Spider Form Q [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Elise's Spider Form E [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[STUN]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Elise's Human Form basic attacks, Q, W, E / Spider Form Q."],
    },
    elise: {
      ko: ["인간폼 E의 [[STUN]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음."],
      en: ["Elise's Human Form E [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies."],
    },
  },
};
