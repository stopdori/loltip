// app/data/matchups/camille/camille_ivern.ts
import type { MatchupSummary } from "../_types";

export const camille_ivern: MatchupSummary = {
  champs: ["camille", "ivern"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 아이번 Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]] 을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음. \n 단, [[ROOT]]이 E1( 대기 단계 )까지 남아있다면 카밀 E가 해제될 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 아이번 Q의 [[DASH]]을 끊을 수 있음.",
        "R의 [[UNTARGETABLE]]로 아이번 평타 / Q / R로 [[SUMMON]]된 데이지 3번째 [[BA]] [[AIRBORNE]]을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Ivern's Q [[ROOT]] and the 3rd [[BA]] [[AIRBORNE]] from R [[SUMMON]]ed Daisy, and continue into the E1 (Wall-dash phase) [[DASH]]. \n However, if the [[ROOT]] remains until the E1 (Hold phase), Camille's E may be cancelled.",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Ivern's Q [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Ivern's basic attacks / Q / the 3rd [[BA]] [[AIRBORNE]] from R [[SUMMON]]ed Daisy."
      ],
    },
    ivern: {
      ko: ["Q의 [[ROOT]], R로 [[SUMMON]]된 데이지의 3번째 [[BA]] [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Ivern's Q [[ROOT]] and the 3rd [[BA]] [[AIRBORNE]] from R [[SUMMON]]ed Daisy can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
