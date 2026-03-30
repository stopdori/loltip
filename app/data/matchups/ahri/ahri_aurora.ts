// app/data/matchups/ahri/ahri_aurora.ts
import type { MatchupSummary } from "../_types";

export const ahri_aurora: MatchupSummary = {
  champs: ["ahri", "aurora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["아리 E의 [[CHARM]]으로 오로라 W, E(후진 단계)의 [[DASH]]을 끊을 수 있음.", "아리 E의 [[CHARM]]으로 오로라 R의 [[UNSTOPPABLE]]를 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Aurora's W and E (backstep phase)", "Ahri's E [[CHARM]] cannot stop Aurora's R [[UNSTOPPABLE]].\nHowever, the [[CHARM]] still applies."],
    },
    aurora: {
      ko: [],
      en: [],
    },
  },
};
