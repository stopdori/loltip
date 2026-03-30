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
      ko: ["아리 E의 [[CHARM]]으로 암베사 P의 [[DASH]]을 끊을 수 있음.", "아리 E의 [[CHARM]]으로 암베사 R의 [[UNSTOPPABLE]]를 막을 수 없음.\n단, [[CHARM]]은 남아있음."],
      en: ["Ahri's E can interrupt Ambessa's P", "Ahri's E [[CHARM]] cannot stop Ambessa's R [[UNSTOPPABLE]].\nHowever, the [[CHARM]] still applies."],
    },
    ambessa: {
      ko: ["암베사 R의 [[SUPPRESS]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Ambessa's R [[SUPPRESS]] can interrupt Ahri's R"],
    },
  },
};
