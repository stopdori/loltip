// app/data/matchups/galio/galio_janna.ts
import type { MatchupSummary } from "../_types";

export const galio_janna: MatchupSummary = {
  champs: ["galio", "janna"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    galio: {
      ko: [""],
      en: [""],
    },
    janna: {
      ko: ["Q의 [[AIRBORNE]], R의 [[KNOCKBACK]]으로 갈리오 W의 [[SKILL_CHARGED]], E의 [[DASH]], R의 [[SKILL_CHANNEL]]을 끊을 수 있음. \n 단, 갈리오 W는 중단될 때 시전."],
      en: ["Q [[AIRBORNE]] and R's [[KNOCKBACK]] can interrupt Galio's W [[SKILL_CHARGED]], E [[DASH]] and R [[SKILL_CHANNEL]]. \n However, Galio's W still triggers when interrupted."],
    },
  },
};
