// app/data/matchups/camille/camille_wukong.ts
import type { MatchupSummary } from "../_types";

export const camille_wukong: MatchupSummary = {
  champs: ["camille", "wukong"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    camille: {
      ko: ["E1( 투척 단계 )의 [[CC_BUFFER]]로 오공 R의 [[AIRBORNE]]을 무시하고 E1( 벽돌진 단계 )의 [[DASH]]을 할 수 있음.", 
        "E의 [[KNOCKBACK]] / R의 [[KNOCKBACK]], [[GRAB]]으로 오공 W, E의 [[DASH]]을 끊을 수 있음.", 
        "R의 [[UNTARGETABLE]]로 오공 W, E, R을 피할 수 있음.", 
        "R의 [[UNTARGETABLE]]로 오공 Q를 피할 수 없음. [[CLIP:https://www.youtube.com/shorts/3pJi3iSgblg]]"
      ],
      en: ["Camille's E1 (Throw phase) [[CC_BUFFER]] can ignore Wukong's R [[AIRBORNE]] and continue into the E1 (Wall-dash phase) [[DASH]].",
        "Camille's E [[KNOCKBACK]] / R [[KNOCKBACK]], [[GRAB]] can interrupt Wukong's W and E [[DASH]].",
        "Camille's R [[UNTARGETABLE]] can dodge Wukong's W, E, and R.",
        "Camille's R [[UNTARGETABLE]] cannot dodge Wukong's Q. [[CLIP:https://www.youtube.com/shorts/3pJi3iSgblg]]"
      ],
    },
    wukong: {
      ko: ["R의 [[AIRBORNE]]으로 카밀 E1, E2의 [[DASH]]을 끊을 수 있음."],
      en: ["Wukong's R [[AIRBORNE]] can interrupt Camille's E1 and E2 [[DASH]]."],
    },
  },
};
