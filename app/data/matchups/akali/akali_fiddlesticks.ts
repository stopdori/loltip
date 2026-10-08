// app/data/matchups/akali/akali_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const akali_fiddlesticks: MatchupSummary = {
  champs: ["akali", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    akali: {
      ko: ["E2의 [[HOMING]] [[DASH]]으로 피들스틱 R의 [[BLINK]]을 따라 갈 수 있음."],
      en: ["E2 [[HOMING]] [[DASH]] can follow Fiddlesticks's R [[BLINK]]."],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 아칼리 E1, E2, R1, R2의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
