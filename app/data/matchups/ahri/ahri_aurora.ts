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
      ko: ["E의 [[CHARM]]으로 오로라 W, E의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Aurora's W and E [[DASH]]."],
    },
    aurora: {
      ko: ["오로라 E(준비단계)의 [[CC_BUFFER]], R의 [[UNSTOPPABLE]] [[DASH]]로 아리 E의 [[CHARM]]을 무시하고 [[DASH]]할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Aurora's R [[UNSTOPPABLE]] can briefly ignore Ahri's E [[CHARM]].\nHowever, the [[CHARM]] still applies after [[UNSTOPPABLE]] ends."],
    },
  },
};      
