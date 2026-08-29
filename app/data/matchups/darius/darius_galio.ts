// app/data/matchups/darius/darius_galio.ts
import type { MatchupSummary } from "../_types";

export const darius_galio: MatchupSummary = {
  champs: ["darius", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    darius: {
      ko: ["E의 [[GRAB]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전."],
      en: ["E [[GRAB]] can interrupt Galio's W [[SKILL_CHARGED]], E [[DASH]] and R [[SKILL_CHANNEL]]. \n However, Galio's W still triggers when interrupted."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
