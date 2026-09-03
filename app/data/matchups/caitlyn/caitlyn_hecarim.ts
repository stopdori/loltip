// app/data/matchups/caitlyn/caitlyn_hecarim.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_hecarim: MatchupSummary = {
  champs: ["caitlyn", "hecarim"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["W([[TRAP]])의 [[ROOT]]으로 헤카림 E의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Hecarim's E [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    hecarim: {
      ko: ["E의 [[KNOCKBACK]], R의 [[FEAR]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "R의 [[UNSTOPPABLE]]로 케이틀린 W의 [[ROOT]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[ROOT]]은 남아있음."],
      en: ["E [[KNOCKBACK]] and R's [[FEAR]] can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
  },
};
