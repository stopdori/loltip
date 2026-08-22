// app/data/matchups/caitlyn/caitlyn_naafiri.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_naafiri: MatchupSummary = {
  champs: ["caitlyn", "naafiri"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 나피리 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
      "W([[TRAP]])의 [[ROOT]]으로 나피리 E, R의 [[DASH]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] can interrupt Naafiri's R [[SKILL_CHANNEL]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt Naafiri's E and R [[DASH]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    naafiri: {
      ko: [],
      en: [],
    },
  },
};
