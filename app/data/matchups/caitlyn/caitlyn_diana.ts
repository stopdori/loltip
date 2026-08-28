// app/data/matchups/caitlyn/caitlyn_diana.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_diana: MatchupSummary = {
  champs: ["caitlyn", "diana"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 다이애나 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Diana's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    diana: {
      ko: ["R의 [[GRAB]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["R [[GRAB]] can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
  },
};
