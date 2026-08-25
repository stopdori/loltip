// app/data/matchups/camille/camille_leona.ts
import type { MatchupSummary } from "../_types";

export const camille_leona: MatchupSummary = {
  champs: ["camille", "leona"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 레오나 Q, R의 [[STUN]] / E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 레오나 E의 [[DASH]]을 끊을 수 있음.", 
      "R의 [[UNTARGETABLE]]로 레오나 W(폭발 데미지), E, R을 피할 수 있음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Leona's Q and R [[STUN]] / E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Leona's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Leona's W (explosion damage), E, and R."],
    },
    leona: {
      ko: ["Q, R의 [[STUN]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음. \n 단, [[STUN]]은 남아있음.",
        "E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Leona's Q and R [[STUN]] cannot interrupt Camille's E1 and E2 [[DASH]]. \n However, the [[STUN]] still applies.",
        "Leona's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
