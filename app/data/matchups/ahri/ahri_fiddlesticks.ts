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
      ko: ["아리 E의 [[CHARM]]으로 피들스틱 W([[SKILL_CHANNEL]]), R(시전집중)을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Fiddlesticks's W ([[SKILL_CHANNEL]]) and R (channeling)."],
    },
    fiddlesticks: {
      ko: ["피들스틱의 [[FEAR]]로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Fiddlesticks's [[FEAR]] can interrupt Ahri's R"],
    },
  },
};
