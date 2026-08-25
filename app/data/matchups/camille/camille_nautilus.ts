// app/data/matchups/camille/camille_nautilus.ts
import type { MatchupSummary } from "../_types";

export const camille_nautilus: MatchupSummary = {
  champs: ["camille", "nautilus"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 노틸러스 P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 노틸러스 Q의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 노틸러스 Q, E, R을 피할 수 있음. \n 단, 노틸러스 평타는 대부분 취소됨. 가끔 맞고 [[ROOT]]을 무시할 수 있지만 [[UNSTOPPABLE]] 종료 후 [[ROOT]]이 남아있음.", 
        "[[TIP]]단, 노틸러스 R은 피하는 타이밍이 좀 어려움. \n 노틸러스 R이 다가오는 방향으로 카밀 R을 사용하면 피할 확률이 높음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Nautilus's P [[ROOT]], Q [[GRAB]], and R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Nautilus's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Nautilus's Q, E, and R. \n However, Nautilus's auto-attacks are mostly canceled. Occasionally Camille can get hit and still ignore the [[ROOT]], but the [[ROOT]] remains after [[UNSTOPPABLE]] ends.",
        "[[TIP]]However, the timing to dodge Nautilus's R is a bit tricky. \n Using Camille's R toward the direction Nautilus's R is approaching from increases the chance of dodging it."
      ],
    },
    nautilus: {
      ko: ["Q의 [[CC_BUFFER]]로 카밀 E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]을 무시하고 Q의 [[DASH]]을 할 수 있음. \n 단, 카밀 R의 [[ZONE]] 범위 밖으로 Q의 [[DASH]] 하면, 강제로 [[ZONE]] [[AOE]] 안으로 [[GRAB]]되어 돌아올 수 있음.",
        "P의 [[ROOT]], Q의 [[GRAB]], R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Nautilus's Q [[CC_BUFFER]] can ignore Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] and continue the Q [[DASH]]. \n However, if the Q [[DASH]] moves outside of Camille's R [[ZONE]] range, Nautilus can be forcibly [[GRAB]]bed back into the [[ZONE]] [[AOE]].",
        "Nautilus's P [[ROOT]], Q [[GRAB]], and R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
