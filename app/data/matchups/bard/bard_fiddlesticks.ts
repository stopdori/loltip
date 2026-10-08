// app/data/matchups/bard/bard_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const bard_fiddlesticks: MatchupSummary = {
  champs: ["bard", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    bard: {
      ko: ["바드 Q의 [[STUN]], R(존야)로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: [""],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 바드 E(터널)의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음."],
      en: [],
    },
  },
};
