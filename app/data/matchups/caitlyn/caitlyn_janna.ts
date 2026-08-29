// app/data/matchups/caitlyn/caitlyn_janna.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_janna: MatchupSummary = {
  champs: ["caitlyn", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 잔나 R의 [[SKILL_CHANNEL]]을 끊을 수 없음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt Janna's R [[SKILL_CHANNEL]]."],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 케이틀린 E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Caitlyn's E [[DASH]] and R [[SKILL_CHANNEL]]."],
    },
  },
};
