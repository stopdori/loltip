// app/data/matchups/ahri/ahri_fiora.ts
import type { MatchupSummary } from "../_types";

export const ahri_fiora: MatchupSummary = {
  champs: ["ahri", "fiora"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 피오라 Q의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Fiora's Q [[DASH]]."],
    },
    fiora: {
      ko: ["피오라 W(응수)의 [[CC_IMMUNE]]으로 아리 E의 [[CHARM]]을 무시하고 [[STUN]]을 걸 수 있음."],
      en: ["Fiora's W (Riposte) [[CC_IMMUNE]] can ignore Ahri's E [[CHARM]] and apply a [[STUN]]."],
    },
  },
};
