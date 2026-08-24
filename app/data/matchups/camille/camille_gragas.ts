// app/data/matchups/camille/camille_gragas.ts
import type { MatchupSummary } from "../_types";

export const camille_gragas: MatchupSummary = {
  champs: ["camille", "gragas"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 그라가스 E의 [[DASH]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 그라가스 E, R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.",
      "R의 [[UNTARGETABLE]]로 그라가스 Q, E, R을 피할 수 있음."],
      en: ["Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Gragas's E [[DASH]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Gragas's E and R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
      "Camille's R [[UNTARGETABLE]] can dodge Gragas's Q, E, and R."],
    },
    gragas: {
      ko: ["E, R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Gragas's E and R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
  common: {
    ko: ["카밀 E2의 [[DASH]]과 그라가스 E의 [[DASH]]이 정면으로 부딪히면 대부분 서로에게 유효.",
      "카밀 R과 그라가스 E의 [[DASH]]은 정말 다양한 판정이 나옴. \n 어떤 조건으로 각각의 상황들이 발생하는지 정확히 모르겠음. \n \n 발생하는 결과 \n 1. 카밀 R을 그라가스에게 사용했을 때. \n 1-1 카밀이 맞음. \n 1-2 카밀이 피함. \n \n 2. 카밀 R을 다른 대상에게 사용했을 때. 생성된 [[ZONE]] [[AOE]] 안에서 그라가스가 E를 사용할 때. \n 2-1 카밀이 맞고 그라가스가 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n 2-2 카밀이 피하고 그라가스가 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n \n 3. 카밀 R을 다른 대상에게 사용했을 때. 생성된 [[ZONE]] [[AOE]] 밖에서 그라가스가 E를 사용해서 들어올때. \n 3-1 카밀이 맞지 않고 그라가스가 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n 3-2 카밀이 맞지 않고 그라가스가 [[ZONE]] [[AOE]]에 머무름 \n 3-3 카밀이 맞고 그라가스가 [[ZONE]] 밖으로 [[KNOCKBACK]]. \n 3-4 카밀이 맞고 그라가스가 [[ZONE]] [[AOE]]에 머무름. <<<<< 이 경우만 관측된 적 없음."],
    en: ["When Camille's E2 [[DASH]] and Gragas's E [[DASH]] collide head-on, both usually land on each other.",
      "Camille's R and Gragas's E [[DASH]] produce a wide variety of outcomes. \n It's not clear exactly what conditions cause each of these situations. \n \n Observed outcomes \n 1. When Camille's R is used on Gragas. \n 1-1 Camille is hit. \n 1-2 Camille avoids it. \n \n 2. When Camille's R is used on another target, and Gragas uses E while inside the created [[ZONE]] [[AOE]]. \n 2-1 Camille is hit, and Gragas is [[KNOCKBACK]]ed out of the [[ZONE]]. \n 2-2 Camille avoids it, and Gragas is [[KNOCKBACK]]ed out of the [[ZONE]]. \n \n 3. When Camille's R is used on another target, and Gragas uses E from outside the created [[ZONE]] [[AOE]] to enter it. \n 3-1 Camille is not hit, and Gragas is [[KNOCKBACK]]ed out of the [[ZONE]]. \n 3-2 Camille is not hit, and Gragas stays inside the [[ZONE]] [[AOE]]. \n 3-3 Camille is hit, and Gragas is [[KNOCKBACK]]ed out of the [[ZONE]]. \n 3-4 Camille is hit, and Gragas stays inside the [[ZONE]] [[AOE]]. <<<<< This case has never been observed."],
  },
};
