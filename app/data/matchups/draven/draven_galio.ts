// app/data/matchups/draven/draven_galio.ts
import type { MatchupSummary } from "../_types";

export const draven_galio: MatchupSummary = {
  champs: ["draven", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    draven: {
      ko: ["E의 [[KNOCKBACK]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전."],
      en: ["E [[KNOCKBACK]] can interrupt Galio's W [[SKILL_CHARGED]] and E [[DASH]]. \n However, Galio's W still triggers when interrupted."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
