// app/data/matchups/camille/camille_jinx.ts
import type { MatchupSummary } from "../_types";

export const camille_jinx: MatchupSummary = {
  champs: ["camille", "jinx"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 징크스 활성화된 E([[TRAP]])의 [[ROOT]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "R의 [[UNTARGETABLE]]로 징크스 평타 (미니건, 캐논) / W / E / R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Jinx's activated E ([[TRAP]]) [[ROOT]] and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's R [[UNTARGETABLE]] can dodge Jinx's basic attacks (Minigun, Rocket) / W / E / R."
      ],
    },
    jinx: {
      ko: ["활성화된 E([[TRAP]])의 [[ROOT]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Jinx's activated E ([[TRAP]]) [[ROOT]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
