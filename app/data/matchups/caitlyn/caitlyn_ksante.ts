// app/data/matchups/caitlyn/caitlyn_ksante.ts
import type { MatchupSummary } from "../_types";

export const caitlyn_ksante: MatchupSummary = {
  champs: ["caitlyn", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    caitlyn: {
      ko: ["활성화된 W([[TRAP]])의 [[ROOT]]으로 크산테 W의 [[SKILL_CHANNEL]]을 끊을 수 없음.",
      "W([[TRAP]])의 [[ROOT]]으로 크산테 E의 [[DASH]], R의 [[BLINK]]을 끊을 수 없음. \n 단, [[ROOT]]과 헤드샷은 남아있음."],
      en: ["Caitlyn's activated W's ([[TRAP]]) [[ROOT]] cannot interrupt K'Sante's W [[SKILL_CHANNEL]].",
        "Caitlyn's W ([[TRAP]]) [[ROOT]] cannot interrupt K'Sante's E [[DASH]] and R [[BLINK]]. \n However, the [[ROOT]] and headshot still apply."],
    },
    ksante: {
      ko: [],
      en: [],
    },
  },
};
