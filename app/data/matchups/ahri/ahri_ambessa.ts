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
      ko: ["아리 E로 암베사 P를 끊을 수 있음"],
      en: ["Ahri's E can interrupt Ambessa's P"],
    },
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아리 R을 끊을 수 있음.", "암베사 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Ahri's R.", "Ambessa's R [[UNSTOPPABLE]] can ignore Ahri's E [[CHARM]].\nHowever, [[CHARM]] still applies."],
    },
  },
};
