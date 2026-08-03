// app/data/matchups/ahri/ahri_jayce.ts
import type { MatchupSummary } from "../_types";

export const ahri_jayce: MatchupSummary = {
  champs: ["ahri", "jayce"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 제이스 해머폼 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Jayce's hammer form Q [[DASH]]."],
    },
    jayce: {
      ko: ["제이스 해머폼 E의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Jayce's hammer form E [[KNOCKBACK]] can interrupt Ahri's R [[DASH]]."],
    },
  },
};
