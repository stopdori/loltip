// app/data/matchups/azir/azir_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const azir_fiddlesticks: MatchupSummary = {
  champs: ["azir", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]]."],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
