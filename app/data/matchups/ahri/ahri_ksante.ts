// app/data/matchups/ahri/ahri_ksante.ts
import type { MatchupSummary } from "../_types";

export const ahri_ksante: MatchupSummary = {
  champs: ["ahri", "ksante"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 크산테 E의 [[DASH]]을 끊을 수 있음.", "아리 E의 [[CHARM]]으로 크산테 W, R의 [[UNSTOPPABLE]]을 끊을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt K'Sante's E", "Ahri's E [[CHARM]] cannot interrupt K'Sante's W or R [[UNSTOPPABLE]].\nHowever, the [[CHARM]] still applies."],
    },
    ksante: {
      ko: ["크산테 Q3의 [[AIRBORNE]], R의 [[SUPPRESS]]로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["K'Sante's Q3 and R can interrupt Ahri's R"],
    },
  },
};
