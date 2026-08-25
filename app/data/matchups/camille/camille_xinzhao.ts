// app/data/matchups/camille/camille_xinzhao.ts
import type { MatchupSummary } from "../_types";

export const camille_xinzhao: MatchupSummary = {
  champs: ["camille", "xinzhao"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 신 짜오 Q3의 [[AIRBORNE]], R의 [[KNOCKBACK]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 신 짜오 E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 신 짜오 W, E, R을 피할 수 있음."
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Xin Zhao's Q3 [[AIRBORNE]] and R [[KNOCKBACK]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Xin Zhao's E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Xin Zhao's W, E, and R."
      ],
    },
    xinzhao: {
      ko: ["Q3의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Xin Zhao's Q3 [[AIRBORNE]] and R [[KNOCKBACK]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
