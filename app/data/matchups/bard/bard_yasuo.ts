// app/data/matchups/bard/bard_yasuo.ts
import type { MatchupSummary } from "../_types";

export const bard_yasuo: MatchupSummary = {
  champs: ["bard", "yasuo"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 야스오 E의 [[DASH]]을 끊을 수 있음"],
      en: [],
    },
    yasuo: {
      ko: ["야스오 W([[WINDSHIELD]])를 바드 Q, R의 [[PROJECTILE]]를 막을 수 있음. \n 단, R은 조건부로 막을 수 있음. 날아가는 R은 장막에 막힘.", 
        "야스오 R의 [[CAST_COMMIT]]으로 바드 Q의 [[STUN]], R(존야)에 끊기지 않음. \n 존야 상태로 되어도 대상에게 데미지가 들어감."],
      en: [],
    },
  },
};
