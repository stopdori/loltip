// app/data/matchups/aatrox/aatrox_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const aatrox_fiddlesticks: MatchupSummary = {
  champs: ["aatrox", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    aatrox: {
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 발동된 피들스틱 R의 [[AURA]]를 끊을 수 없음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Fiddlesticks' W and R [[SKILL_CHANNEL]].", "Q [[AIRBORNE]] and W [[GRAB]] cannot interrupt Fiddlesticks' R [[AURA]] once it is already active."],
    },
    fiddlesticks: {
      ko: [],
      en: [],
    },
  },
};
