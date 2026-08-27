// app/data/matchups/chogath/chogath_galio.ts
import type { MatchupSummary } from "../_types";

export const chogath_galio: MatchupSummary = {
  champs: ["chogath", "galio"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    chogath: {
      ko: ["Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 갈리오 R의 [[SKILL_CHANNEL]]을 끊을 수 있음.",
        "Q의 [[AIRBORNE]], W의 [[SILENCE]]으로 갈리오 W의 [[SKILL_CHARGED]]을 끊을 수 있음.",
        "Q의 [[AIRBORNE]]으로 갈리오 E의 [[DASH]]을 끊을 수 있음.",
        "W의 [[SILENCE]]으로 갈리오 E의 [[DASH]]을 끊을 수 없음. \n 단, [[SILENCE]]은 남아있음."],
      en: ["Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Galio's R [[SKILL_CHANNEL]].",
        "Q [[AIRBORNE]] and W [[SILENCE]] can interrupt Galio's W [[SKILL_CHARGED]].",
        "Q [[AIRBORNE]] can interrupt Galio's E [[DASH]].",
        "W [[SILENCE]] cannot interrupt Galio's E [[DASH]]. \n However, the [[SILENCE]] still applies."],
    },
    galio: {
      ko: [],
      en: [],
    },
  },
};
