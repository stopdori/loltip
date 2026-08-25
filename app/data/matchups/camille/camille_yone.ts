// app/data/matchups/camille/camille_yone.ts
import type { MatchupSummary } from "../_types";

export const camille_yone: MatchupSummary = {
  champs: ["camille", "yone"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 요네 Q3의 [[AIRBORNE]] / R의 [[KNOCKBACK]], [[STUN]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 요네 R의 [[STUN]] 지속시간은 정말 짧아서 [[STUN]]로 E1( 대기 단계 )을 끊을 수 없음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 요네 Q3, E1의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 요네 Q, Q3, W, R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 요네 E2의 피해를 피할 수 없음.", 
        "[[TIP]] 요네 R은 [[TIMING_CAST]]이 정말 길어서. \n R을 보고 갈고리를 발사하면 맞아도 [[CC_BUFFER]]로 무시할 수 있음. [[CLIP:https://www.youtube.com/shorts/fvdRDV38AyQ]] \n 단, 미리 사용하면 맞지도 않음."],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Yone's Q3 [[AIRBORNE]] / R [[KNOCKBACK]], [[STUN]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n Yone's R [[STUN]] duration is so short that it cannot interrupt the E1 (Hold phase) with [[STUN]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Yone's Q3 and E1 [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Yone's Q, Q3, W, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Yone's E2 damage.",
        "[[TIP]] Yone's R has a really long [[TIMING_CAST]], \n so if Camille fires the grapple hook after seeing R, even if it hits, it can be ignored via the [[CC_BUFFER]]. [[CLIP:https://www.youtube.com/shorts/fvdRDV38AyQ]] \n However, if Camille uses it in advance, it won't even get hit."],
    },
    yone: {
      ko: ["Q3의 [[AIRBORNE]] / R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Yone's Q3 [[AIRBORNE]] / R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
