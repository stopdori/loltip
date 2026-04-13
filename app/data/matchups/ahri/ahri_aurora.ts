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
      ko: ["아리 E의 [[CHARM]]으로 오로라 W, E(후진 단계)의 [[DASH]]을 끊을 수 있음."],
      en: ["Ahri's E [[CHARM]] can interrupt Aurora's W and E (backward phase) [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 잠시 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음."],
      en: ["Aurora's R [[UNSTOPPABLE]] can briefly ignore Ahri's E [[CHARM]].\nHowever, the [[CHARM]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};
