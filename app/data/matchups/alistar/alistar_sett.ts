// app/data/matchups/alistar/alistar_sett.ts
import type { MatchupSummary } from "../_types";

export const alistar_sett: MatchupSummary = {
  champs: ["alistar", "sett"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    alistar: {
      ko: ["R의 [[CC_CLEANSE]]로 세트 E의 [[SLOW]], [[STUN]] / R의 [[SUPPRESS]]을 해제할 수 있음. \n 단, 알리스타가 [[SUPPRESS]]을 해제하면 그 즉시 벗어나지만, 세트는 알리스타를 매다 꽂은 것처럼 도착지 주변에 피해를 줌.", 
        "W의 [[KNOCKBACK]]으로 세트 W를 끊을 수는 없지만 궤적을 비틀 수 있음."
      ],
      en: ["R [[CC_CLEANSE]] can cleanse Sett's E [[SLOW]][[STUN]] and R [[SUPPRESS]]. \n However, when Alistar cleanses the [[SUPPRESS]], he escapes immediately, but Sett still deals damage around the destination as if Alistar was slammed down.", "W [[KNOCKBACK]] cannot interrupt Sett's W, but can distort its trajectory."],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
