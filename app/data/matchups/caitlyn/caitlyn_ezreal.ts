// app/data/matchups/caitlyn/caitlyn_ezreal.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_ezreal: MatchupSummary = {
  champs: ["caitlyn", "ezreal"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 이즈리얼 E의 [[BLINK]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Ezreal's E [[BLINK]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    ezreal: {
      ko: ["E의 [[CC_BUFFER]]로 케이틀린 W의 [[ROOT]]을 무시하고 [[BLINK]] 할 수 있음. \n 단, [[ROOT]]은 남아있음."],
      en: [],
    },
  },
};
