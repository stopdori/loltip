// app/data/matchups/ahri/ahri_fiddlesticks.ts
import type { MatchupSummary } from "../_types";

export const ahri_fiddlesticks: MatchupSummary = {
  champs: ["ahri", "fiddlesticks"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 피들스틱 W, R의 [[SKILL_CHANNEL]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Fiddlesticks's W and R [[SKILL_CHANNEL]]."],
    },
    fiddlesticks: {
      ko: ["피들스틱 Q의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음.", 
        "피들스틱 E의 [[SILENCE]]으로 아리 R의 [[DASH]]을 끊을 수 없음."],
      en: ["Fiddlesticks's Q [[FEAR]] can interrupt Ahri's R [[DASH]].", "Fiddlesticks's E [[SILENCE]] cannot interrupt Ahri's R [[DASH]]."],
    },
  },
};
