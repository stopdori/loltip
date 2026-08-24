// app/data/matchups/camille/camille_hwei.ts
import type { MatchupSummary } from "../_types";

export const camille_hwei: MatchupSummary = {
  champs: ["camille", "hwei"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 흐웨이 EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[GRAB]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[FEAR]]가 E1( 대기 단계 )까지 남아있다면 카밀 E 해제. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.",
        "R의 [[UNTARGETABLE]]로 흐웨이 평타, QQ, QW, QE, WE(평타), EQ, EW, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Hwei's EQ [[FEAR]], EW [[ROOT]], and EE [[GRAB]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[FEAR]] remains until the E1 (Hold phase), Camille's E is cancelled. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Hwei's basic attacks, QQ, QW, QE, WE (basic attack), EQ, EW, and R."
      ],
    },
    hwei: {
      ko: ["EQ의 [[FEAR]], EW의 [[ROOT]], EE의 [[GRAB]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Hwei's EQ [[FEAR]], EW [[ROOT]], and EE [[GRAB]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
