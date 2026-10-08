// app/data/matchups/evelynn/evelynn_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const evelynn_fiddlesticks: MatchupSummary = {
  champs: ["evelynn", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    evelynn: {
      ko: ["W의 [[CHARM]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: ["W [[CHARM]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]]. [[EXIST]]"],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 이블린 [[EMPOWERED]] E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
