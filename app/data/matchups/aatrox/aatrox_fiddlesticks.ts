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
      ko: ["Q의 [[AIRBORNE]], W의 [[GRAB]] 효과로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and W's [[GRAB]] effect can interrupt Fiddlesticks' W and R [[SKILL_CHANNEL]]."],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 아트록스 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]]"
      ],
      en: [],
    },
  },
};
