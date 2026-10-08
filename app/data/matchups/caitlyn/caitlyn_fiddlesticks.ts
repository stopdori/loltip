// app/data/matchups/caitlyn/caitlyn_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_fiddlesticks: MatchupSummary = {
  champs: ["caitlyn", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 피들스틱 W의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "활성화된 W([[TRAP]])의 [[ROOT]]으로 피들스틱 R의 [[SKILL_CHANNEL]] [[BLINK]] 을 끊을 수 있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Fiddlesticks' W [[SKILL_CHANNEL]].",
        "Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Fiddlesticks' R [[SKILL_CHANNEL]] [[BLINK]]."],
    },
    fiddlesticks: {
      ko: ["Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 케이틀린 E의 [[DASH]]을 끊을 수 없음. [[NOT_EXIST]] \n 단, [[FEAR]], [[SILENCE]]은 남아있음.", 
        "Q(패시브, 액티브)의 [[FEAR]] / E의 [[SILENCE]]으로 케이틀린 R의 [[SKILL_CHANNEL]]을 끊을 수 있음. [[EXIST]]"],
      en: [],
    },
  },
};
