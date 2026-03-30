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
      ko: ["아리 E의 [[CAHRM]]으로 피들스틱 W(채널링), R(시전집중)을 끊을 수 있음."],
      en: ["Ahri's E can interrupt Fiddlesticks's W (channeling) and R (channeling)"],
    },
    fiddlesticks: {
      ko: ["피들스틱의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Fiddlesticks's [[FEAR]] can interrupt Ahri's R"],
    },
  },
};
