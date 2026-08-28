// app/data/matchups/diana/diana_galio.ts
import type { MatchupSummary } from "../_types";

export const diana_galio: MatchupSummary = {
  champs: ["diana", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    diana: {
      ko: ["R의 [[GRAB]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전."],
      en: ["R [[GRAB]] can interrupt Galio's W [[SKILL_CHARGED]] and E [[DASH]]. \n However, Galio's W still triggers when interrupted."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
