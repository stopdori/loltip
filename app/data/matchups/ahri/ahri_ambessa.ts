// app/data/matchups/ahri/ahri_ambessa.ts
import type { MatchupSummary } from "../_types";

export const ahri_ambessa: MatchupSummary = {
  champs: ["ahri", "ambessa"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 암베사 P의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Ambessa's P [[DASH]]."],
    },
    ambessa: {
      ko: ["R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[UNSTOPPABLE]] 종료 후 [[CHARM]]은 남아있음.",
        "R의 [[SUPPRESS]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["R [[UNSTOPPABLE]] can briefly ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies after [[UNSTOPPABLE]] ends.", "R [[SUPPRESS]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
