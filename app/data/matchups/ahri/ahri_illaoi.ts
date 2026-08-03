// app/data/matchups/ahri/ahri_illaoi.ts
import type { MatchupSummary } from "../_types";

export const ahri_illaoi: MatchupSummary = {
  champs: ["ahri", "illaoi"],
  summary: {
    ko: [],
    en: [],
  },
  highlightsByChamp: {
    ahri: {
      ko: ["E의 [[CHARM]]으로 일라오이 W의 [[DASH]]을 끊을 수 있음."],
      en: ["E [[CHARM]] can interrupt Illaoi's W [[DASH]]."],
    },
    illaoi: {
      ko: ["일라오이 R의 [[UNSTOPPABLE]]로 아리 E의 [[CHARM]]을 무시할 수 있음. \n 단, [[CHARM]]은 남아있음."],
      en: ["Illaoi's R [[UNSTOPPABLE]] allows her to ignore Ahri's E [[CHARM]]. \n However, the [[CHARM]] still applies."],
    },
  },
};
