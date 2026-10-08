// app/data/matchups/belveth/belveth_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const belveth_fiddlesticks: MatchupSummary = {
  champs: ["belveth", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    belveth: {
      ko: ["벨베스 W의 [[AIRBORNE]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음.", 
        "벨베스 R은 즉시 발동에다 [[TIMING_AFTERCAST]]이 있는 것으로 피들스틱 Q의 [[FEAR]]로 끊기지 않음. \n 단, [[FEAR]]는 남아있음."],
      en: [""],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 벨베스 Q의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음.", 
        "Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 벨베스 E의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
