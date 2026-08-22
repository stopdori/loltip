// app/data/matchups/azir/azir_caitlyn.ts
import type { MatchupSummary } from "../_types";

export const azir_caitlyn: MatchupSummary = {
  champs: ["azir", "caitlyn"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    azir: {
      ko: ["아지르 R의 [[KNOCKBACK]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Azir's R [[KNOCKBACK]] can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 아지르 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Azir's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
  },
};
