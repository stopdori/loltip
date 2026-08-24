// app/data/matchups/camille/camille_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const camille_fiddlesticks: MatchupSummary = {
  champs: ["camille", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E의 [[KNOCKBACK]], [[STUN]] / R의 [[DISRUPT]]로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "E1( 투척 단계 )의 [[CC_BUFFER]]로 피들스틱 P, Q의 [[FEAR]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제.",
      "R의 [[UNTARGETABLE]]로 피들스틱 평타, Q, E, R을 피할 수 있음. \n 단, 피들스틱 W의 [[TETHER]]은 사거리를 벗어나지 않으면 피할 수 없음."],
      en: ["Camille's E [[KNOCKBACK]], [[STUN]] / R [[DISRUPT]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]].",
        "Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Fiddlesticks's P and Q [[FEAR]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled.",
      "Camille's R [[UNTARGETABLE]] can dodge Fiddlesticks's basic attacks, Q, E, and R. \n However, Fiddlesticks's W [[TETHER]] cannot be avoided without leaving its range."],
    },
    fiddlesticks: {
      ko: ["P, Q의 [[FEAR]]로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Fiddlesticks's P and Q [[FEAR]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
