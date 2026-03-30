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
      ko: ["아리 E의 [[CHARM]]으로 제이스 해머폼 Q를 끊을 수 있음.\n즉, 데미지도 무효."],
      en: ["Ahri's E can interrupt Jayce's hammer form Q"],
    },
    jayce: {
      ko: ["제이스 해머폼 E의 [[KNOCKBACK]]으로 아리 R의 [[DASH]]을 끊을 수 있음."],
      en: ["Jayce's hammer form E can interrupt Ahri's R"],
    },
  },
};
