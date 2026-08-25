// app/data/matchups/camille/camille_soraka.ts
import type { MatchupSummary } from "../_types";

export const camille_soraka: MatchupSummary = {
  champs: ["camille", "soraka"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 소라카 E의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 소라카 평타, Q, E를 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Soraka's E [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Soraka's auto-attacks, Q, and E."
      ],
    },
    soraka: {
      ko: ["E의 [[SILENCE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 없음.",
        "E의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음. \n 단, 다른 적 챔피언에게 [[SILENCE]] [[ZONE]]을 미리 깔아두고 [[ROOT]]이 발동할 때 카밀이 [[DASH]]으로 [[ZONE]]을 지나가야 가능. [[CLIP:https://www.youtube.com/watch?v=6ssyZV743To&t=5s]]", 
        "[[TIP]]실험 : 소라카 E의 [[SILENCE]] [[ZONE]]으로 다른 적 소라카 없이 카밀 하나만 맞혀서 가능한가? \n 실험 방법 \n 1. 소라카 E의 [[SILENCE]] [[ZONE]]을 카밀이 최대한 오래 밟을 수 있는 위치를 잡고 \n 2. 소라카 E의 [[TIMING_CAST]] 때문에 카밀의 E 보다 먼저 사용. \n 3. [[ZONE]]이 생기기 전에 카밀 E의 갈고리를 최대한 먼 벽에 발사. \n 4. 갈고리가 적중하여 E1의 [[DASH]]이 날아가는 동안 [[SILENCE]] [[ZONE]]이 [[ROOT]]으로 변하길 기대. \n 5. 결과 : [[ROOT]]이 발동하지 않음. [[CLIP:https://youtube.com/shorts/6ssyZV743To?si=It75Ur9V0hwGewdf]]"],
      en: ["Soraka's E [[SILENCE]] cannot interrupt Camille's E1 and E2 [[DASH]].",
        "Soraka's E [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]. \n However, this requires pre-placing the [[SILENCE]] [[ZONE]] on another enemy champion, and Camille must [[DASH]] through the [[ZONE]] exactly when the [[ROOT]] triggers. [[CLIP:https://www.youtube.com/watch?v=6ssyZV743To&t=5s]]", 
        "[[TIP]] Test: Can this work by hitting only Camille with Soraka's E [[SILENCE]] [[ZONE]], without another enemy champion? \n Test method \n 1. Position Soraka's E [[SILENCE]] [[ZONE]] where Camille can stand on it as long as possible, \n 2. Cast it before Camille's E, because of Soraka's E [[TIMING_CAST]]. \n 3. Before the [[ZONE]] appears, fire Camille's E hook at the farthest wall possible. \n 4. Hope the [[SILENCE]] [[ZONE]] turns into [[ROOT]] while the hook lands and the E1 [[DASH]] is in flight. \n 5. Result: The [[ROOT]] does not trigger. [[CLIP:https://youtube.com/shorts/6ssyZV743To?si=It75Ur9V0hwGewdf]]"],
    },
  },
};
