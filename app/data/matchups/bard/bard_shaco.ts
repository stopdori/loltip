// app/data/matchups/bard/bard_shaco.ts
import type { MatchupSummary } from "../_types";

export const bard_shaco: MatchupSummary = {
  champs: ["bard", "shaco"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 R(존야)로 [[INVISIBILITY]] 상태, 또는 활성화된 샤코 W(박스)의 시야가 보이면 존야 상태로 만들 수 있음. \n 단, 시야가 보이지 않으면 영향 받지않음.", 
        "바드 R(존야)로 샤코 R([[CLONE]])을 존야 상태로 만들 수 있음. \n 단, 샤코 R의 지속시간이 끝나갈 때 존야 상태로 만들면, 존야 상태에서 정상적으로 분화하고 박스 3개 생성."],
      en: [],
    },
    shaco: {
      ko: [],
      en: [],
    },
  },
};
