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
      ko: ["알리스타 W로 세트 W를 끊을 수는 없지만 각도를 바꿀수는 있음", "알리스타 R의 [[CC_CLEANSE]]로 세트 E의 [[SLOW]] [[STUN]], R의 [[SUPPRESS]]을 해제할 수 있음\n알리스타가 [[SUPPRESS]]을 해제하면 그 즉시 벗어나지만, 세트는 알리스타를 매다 꽂은 것처럼 도착지 주변에 피해를 줌"],
      en: ["Alistar's W cannot interrupt Sett's W, but can change its angle", "Alistar's R [[CC_CLEANSE]] can cleanse Sett's E [[SLOW]] [[STUN]], R [[SUPPRESS]]\\nWhen Alistar cleanses the [[SUPPRESS]], he escapes immediately, but Sett still deals damage around the destination as if Alistar was slammed down"],
    },
    sett: {
      ko: [],
      en: [],
    },
  },
};
